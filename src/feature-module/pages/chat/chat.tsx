import React, { useEffect, useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContactInfo from "../../../core/modals/contact-info-off-canva";
import ContactFavourite from "../../../core/modals/contact-favourite-canva";
import {Tooltip} from "antd";
import ForwardMessage from "../../../core/modals/forward-message";
import MessageDelete from "../../../core/modals/message-delete";
import { useParams } from 'react-router-dom';
import { MemberContext } from '@context/memberContext';
import { firebaseDB } from "@firebaseApi/firebase";
import { getDoc , doc, collection, addDoc, onSnapshot, query, orderBy, Timestamp, updateDoc } from 'firebase/firestore';
import axios from 'axios';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

interface Message {
  id: string;
  senderId: string;
  senderName: string | null;
  text: string;
  createdAt: Timestamp;
  isRead: boolean;
  isOpenAI:boolean;
}

const Chat: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const { state } = useContext(MemberContext);
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isaiMessage, setAiMessage] = useState<string>("");
  const [otherChatUser, setOtherChatUser] = useState<{ uid: string; mmName: string; mmNickName?: string } | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showEmoji, setShowEmoji] = useState<boolean[]>([]);

  /**
   * 상대방 정보 로드
   */
  const fetchChatUsrData = async () => {
    if (!chatId) return;

    try {
      const chatDocRef = doc(firebaseDB, "chatRooms", chatId);
      const chatDoc = await getDoc(chatDocRef);

      if (!chatDoc.exists()) {
        console.error("채팅방을 찾을 수 없습니다.");
        return;
      }

      const participants = chatDoc.data()?.participants || [];
      const otherUserId = participants.find((uid: string) => uid !== state.uid);

      if (otherUserId) {
        const userDocRef = doc(firebaseDB, "member", otherUserId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setOtherChatUser({uid:otherUserId, mmName: userData.mmName, mmNickName: userData.mmNickName });
        }
      }
    } catch (error) {
      console.error("상대방 데이터를 가져오는 중 오류 발생:", error);
    }
  };
  /*usr */
  const fetchSenderName = async (senderId: string) => {
    try {
      const senderRef = doc(firebaseDB, "member", senderId); // 'member' 컬렉션에서 senderId로 문서 참조
      const senderDoc = await getDoc(senderRef);
  
      // senderName 설정
      const senderName = senderDoc.exists() 
        ? senderDoc.data()?.mmNickName || senderDoc.data()?.mmName 
        : null;
  
      return senderName; // 이름 반환
    } catch (error) {
      console.error("Sender name fetch error:", error);
      return null;
    }
  };
  /**
   * 메시지 로드 및 실시간 업데이트
   */
  const fetchChatData = () => {
    if (!chatId) return;

    const chatRef = collection(firebaseDB, "chatRooms", chatId, "messages");
    const chatQuery = query(chatRef, orderBy("createdAt", "asc"));

    onSnapshot(chatQuery, async (snapshot) => {
      const messagesData: Message[] = await Promise.all(snapshot.docs.map(async (doc) => {;

        // for (const doc of snapshot.docs) {
        //   const messageData = doc.data() as Message;
        //   console.log("senderid:",messageData.senderId);
        //   const senderName = await fetchSenderName(messageData.senderId);
        //   console.log("senderName:",senderName);
        //   // try {
            
        //   //     const senderRef = doc(firebaseDB, "member", messageData.senderId);
        //   //     const senderDoc = await getDoc(senderRef);
        //   //     senderName = senderDoc.exists() ? senderDoc.data()?.mmName || null : null;
            
        //   // } catch (error) {
        //   //   console.error(`Sender 데이터를 가져오는 중 오류 발생: ${error}`);
        //   // }
          

        //   console.log("senderName:",otherChatUser?.mmNickName+" || "+otherChatUser?.mmName);
        //   messagesData.push({
        //     ...messageData,
        //     senderName,
        //   });
        //   console.log("id:",messageData.id);
        //}
        const messageData = doc.data() as Message;
        const senderName = await fetchSenderName(messageData.senderId);

        return {
            ...messageData,
            senderName,
        };
        
      }));
      setMessages(messagesData);
      
    });
  };
  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /**
   * 메시지 전송
   */
  // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const handleSendMessage = async (message: string) => {
    if (!chatId || !message.trim()) return;
    console.log("newMessage.trim():",message);
    // await delay(1000);
    try {
      const messageRef = collection(firebaseDB, "chatRooms", chatId, "messages");
      const newMessage = {
        createdAt: Timestamp.now(),
        senderId: state.uid,
        text: message,
        isRead: false,
        isOpenAI: false,
      };

      await addDoc(messageRef, newMessage);
      console.log("otherChatUser",otherChatUser?.uid);
      // OpenAI API 호출하여 답변 생성
      const sendToOpenAI = async (message: string) => {
        try {
          const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'user', content:"짧게 대답해주세요."+ message }
              ],
              max_tokens: 90
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
              }
            }
          );
  
          const aiResponse = response.data.choices[0].message.content;
  
          // AI의 답변 Firestore에 추가
          const aiMessage = {
            createdAt: Timestamp.now(),
            senderId: otherChatUser?.uid, // AI가 보낸 답변을 상대방 ID로 설정
            text: aiResponse,
            isRead: true,
            isOpenAI: true, // AI의 메시지임을 구분
          };
          await addDoc(messageRef, aiMessage);
          // setAiMessage(aiResponse);
  
          return aiResponse; // 응답 반환
  
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 429) {
              // 호출 제한 초과 시 대기 후 재시도
              console.warn("API 호출 제한 초과. 5초 후 재시도합니다.");
              await delay(5000); // 5초 대기
              return sendToOpenAI(message); // 재시도 호출
            }
            // 네트워크 오류 처리
            console.error("OpenAI API 호출 중 네트워크 오류 발생:", error.message);
            alert("AI 응답을 가져오는 중 오류가 발생했습니다. 다시 시도해 주세요.");
          } else {
            // 예상치 못한 오류 처리
            console.error("예상치 못한 오류 발생:", error);
          }
        }
      };
  
      // OpenAI 호출 시도
      const aiResponse = await sendToOpenAI(message);
      const chatRoomRef = doc(firebaseDB, "chatRooms", chatId);
      console.log("aiMessage  :",aiResponse);
      console.log("message:",message);
      if(aiResponse){
        await updateDoc(chatRoomRef, {
          lastMessage: aiResponse,
          lastMessageTime: Timestamp.now(),
        });
      }else{
        await updateDoc(chatRoomRef, {
          lastMessage: message,
          lastMessageTime: Timestamp.now(),
        });
      }
      

      
      setNewMessage("");
    } catch (error) {
      console.error("메시지 전송 중 오류 발생:", error);
    }
  };

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleEmoji = (groupId: number) => {
    setShowEmoji((prev) => {
      const newState = [...prev];
      newState[groupId] = !newState[groupId];
      return newState;
    });
  };

  /**
   * 초기 데이터 로드
   */
  useEffect(() => {
    if (chatId) {
      fetchChatUsrData();
      fetchChatData();
    }
  }, [chatId]);
  document.querySelectorAll(".chat_room").forEach(function (element) {
    element.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        const showChat = document.querySelector(".chat-messages");
        if (showChat) {
          showChat.classList.add("show");
        }
      }
    });
  });
  document.querySelectorAll(".chat-close").forEach(function (element) {
    element.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        const hideChat = document.querySelector(".chat-messages");
        if (hideChat) {
          hideChat.classList.remove("show");
        }
      }
    });
  });
  
  
  return (
    <>
      {/* Chat */}
      <div className={`chat chat-messages show`} id="middle">
        <div className="chat-messages-area">
          <div className="chat-header">
            <div className="user-details">
              <div className="d-xl-none">
                {/* <div className="text-muted chat-close me-2"
                        onClick={() => navigate('/index')}> */}
                <button className="text-muted chat-close me-2 p-2">
                  <i className="fas fa-arrow-left" />
                </button>
                {/* </div> */}
              </div>
              <div className="avatar avatar-lg online flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-06.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div className="ms-2 overflow-hidden">
                <h6>{otherChatUser?.mmNickName || otherChatUser?.mmName}</h6>{/* 채팅유저이름 */}
                <span className="last-seen">Online</span>{/* 채팅유저 상태 */}
              </div>
            </div>
            <div className="chat-options">
            <ul>
                <li>
                  <Tooltip title="Search" placement="bottom">
                    <Link
                      to="#"
                      className="btn chat-search-btn"
                      onClick={() => toggleSearch()}
                    >
                      <i className="ti ti-search" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Video Call" placement="bottom">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#video-call"
                    >
                      <i className="ti ti-video" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Voice Call" placement="bottom">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                    >
                      <i className="ti ti-phone" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Contact Info" placement="bottom">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#contact-profile"
                    >
                      <i className="ti ti-info-circle" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Link className="btn no-bg" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#mute-notification"
                      >
                        <i className="ti ti-volume-off me-2" />
                        알람 끄기
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-chat"
                      >
                        <i className="ti ti-trash me-2" />
                        채팅방 나가기
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#block-user"
                      >
                        <i className="ti ti-ban me-2" />
                        차단
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Chat Search */}
            <div className={`chat-search search-wrap contact-search ${showSearch?'visible-chat':''}` }>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Contacts"
                  />
                  <span className="input-group-text">
                    <i className="ti ti-search" />
                  </span>
                </div>
              </form>
            </div>
            {/* /Chat Search */}
          </div>
          <MessageList messages={messages}
          toggleEmoji={toggleEmoji}
          showEmoji={showEmoji}
          currentUserId={state.uid}/>
        </div>
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
      {/* /Chat */}
      <ContactInfo/>
      <ContactFavourite/>
      <ForwardMessage/>
      <MessageDelete/>
    </>
  );
};

export default Chat;

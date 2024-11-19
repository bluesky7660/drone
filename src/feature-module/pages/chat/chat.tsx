import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContactInfo from "../../../core/modals/contact-info-off-canva";
import ContactFavourite from "../../../core/modals/contact-favourite-canva";
import {Tooltip} from "antd";
import ForwardMessage from "../../../core/modals/forward-message";
import MessageDelete from "../../../core/modals/message-delete";
import Scrollbars from 'react-custom-scrollbars-2'
import { useParams } from 'react-router-dom';
import { MemberContext } from '@context/memberContext';
import { firebaseDB } from "@firebaseApi/firebase";
import { getDoc ,getDocs, doc, collection, addDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import MessageInput from './MessageInput';


interface Message {
  createdAt: Timestamp;
  senderId: string;
  text: string;
  isRead: boolean;
}

const Chat: React.FC = () => {
  // const [open1, setOpen1] = useState(false);
  // const [copied, setCopied] = useState(false);
  // const [showReply, setShowReply] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [showSearch, setShowSearch] = useState(false);
  const [showEmoji, setShowEmoji] =  useState<Record<number, boolean>>({});
  const { chatId } = useParams<{ chatId: string }>(); // chatId를 받아옴
  const {state} = useContext(MemberContext);
  const [otherUser, setOtherUser] = useState('');

  console.log("Chat ID:", chatId); // chatId가 잘 받아왔는지 확인
  const toggleEmoji = (groupId: number) => {
    setShowEmoji((prev) => ({
      ...prev,
      [groupId]: !prev[groupId], // Toggle the state for this specific group
    }));
  };
  
  // const handleCopy = () => {
  //   // 클립보드에 메시지 텍스트를 복사
  //   navigator.clipboard.writeText(message).then(() => {
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000); // 2초 후 복사 상태 초기화
  //   });
  // };
  const fetchChatUsrData = async () => {
    if (!chatId) {
      console.error("chatId가 제공되지 않았습니다.");
      return;
    }
    try {
      const chatDocRef  = doc(firebaseDB, "chatRooms", chatId);
      const chatDoc = await getDoc(chatDocRef);
      if (!chatDoc.exists()) {
        console.error("채팅방을 찾을 수 없습니다.");
        return;
      }
      const chatData = chatDoc.data();
      const participants = chatData?.participants || [];

      // 2. 상대방 ID 가져오기
      const otherUserId = participants.find((uid: string) => uid !== state.uid);
      console.log("otherUserId:",otherUserId);
      if (!otherUserId) {
        console.error("상대방 정보를 찾을 수 없습니다.");
        return;
      }

      // 3. 상대방 정보 가져오기
      const userDocRef = doc(firebaseDB, "member", otherUserId);
      const userDoc = await getDoc(userDocRef);
      console.log("userDoc.data():",userDoc.data());
      if (userDoc.exists()) {
        console.log("userDoc.data():",userDoc.data());
        const userData = userDoc.data();
        setOtherUser({ uid: userDoc.id, ...userDoc.data() });
        console.log("otherUser:",otherUser);
      }
      console.log("userDoc.data 없음");
      
    } catch (error) {
      console.error("상대방데이터를 가져오는 중 오류 발생:", error);
    }
  }
  const fetchChatData = async () => {
    if (!chatId) {
      console.error("chatId가 제공되지 않았습니다.");
      return;
    }
    try {
      const chatRef = collection(firebaseDB, 'chatRooms', chatId, 'messages');
      const chatq = query(chatRef, orderBy('createdAt', 'asc'));
      const querySnapshot = await getDocs(chatq);
      const messagesData: Message[] = [];
      querySnapshot.forEach((doc) => {
        messagesData.push(doc.data() as Message);
      });
      setMessages(messagesData);
    } catch (error) {
      console.error("채팅데이터를 가져오는 중 오류 발생:", error);
    }
  }
  useEffect(() => {
    console.log("hi");
    
    if (chatId) {
      fetchChatUsrData();
    }
  }, [chatId, state.uid]);

  const handleSendMessage = async (message: string) => {
    if (!chatId) {
      console.error("chatId가 제공되지 않았습니다.");
      return;
    }
    if (!message.trim()) return; // 빈 메시지 방지
    try {
      const messageRef = collection(firebaseDB, 'chatRooms', chatId, 'messages');
      const newMessage = {
        createdAt: Timestamp.now(),
        senderId: state.uid, // 현재 사용자 ID
        text: message,
        isRead: false,
      };

      await addDoc(messageRef, newMessage); // Firestore에 메시지 추가
      setNewMessage(''); // 입력창 비우기
      fetchChatData(); // 새로운 메시지 가져오기
    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
    }
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    document.querySelectorAll(".chat-user-list").forEach(function (element) {
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
  }, []);
  
  
  return (
    <>
      {/* Chat */}
      <div className={`chat chat-messages show`} id="middle">
        <div className="chat-messages-area">
          <div className="chat-header">
            <div className="user-details">
              <div className="d-xl-none">
                <Link className="text-muted chat-close me-2" to="#">
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
              <div className="avatar avatar-lg online flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-06.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div className="ms-2 overflow-hidden">
                <h6>{otherUser.mmNickName||otherUser.mmName}</h6>{/* 채팅유저이름 */}
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
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight={false}
            autoHeightMin={0}
            autoHeightMax='88vh'
            thumbMinSize={30}
            universal={false}
            hideTracksWhenNotNeeded={true}
          >
            <div className="chat-body chat-page-group ">
              <div className="messages">
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-06.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-content">
                    <div className="chat-profile-name">
                      <h6>
                        Edward Lietz
                        <i className="ti ti-circle-filled fs-7 mx-2" />
                        <span className="chat-time">02:39 PM</span>
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        Hi there! I'm interested in your services.
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(1)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div className="emoj-group-list" onClick={() => toggleEmoji(1)} style={{ display: showEmoji[1] ? 'block' : 'none' }}>
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-06.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-07.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-08.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="ti ti-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item"  onClick={() => setShowReply(true)} to="#">
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#forward-message">
                              <i className="ti ti-arrow-forward-up-double me-2" />
                              전달
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
                              <i className="ti ti-trash me-2" />
                              메시지 삭제
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-profile-name">
                      <h6>
                        Edward Lietz
                        <i className="ti ti-circle-filled fs-7 mx-2" />
                        <span className="chat-time">02:39 PM</span>
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        Can you tell me more about what you offer?, Can you
                        explain it breifly...
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(2)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div className="emoj-group-list" onClick={() => toggleEmoji(2)} style={{ display: showEmoji[2] ? 'block' : 'none' }}>
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-06.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-07.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-08.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="ti ti-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item"  onClick={() => setShowReply(true)} to="#">
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#forward-message">
                              <i className="ti ti-arrow-forward-up-double me-2" />
                              전달
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
                              <i className="ti ti-trash me-2" />
                              메시지 삭제
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
        <MessageInput onSendMessage={sendMessage} />
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

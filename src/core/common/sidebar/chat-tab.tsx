import React, { useState, useEffect ,useContext, useCallback } from 'react';
import ImageWithBasePath from '../imageWithBasePath'
import { Link,useNavigate } from 'react-router-dom'
import { all_routes } from '../../../feature-module/router/all_routes'
import Scrollbars from 'react-custom-scrollbars-2'
import { Swiper, SwiperSlide } from 'swiper/react';
import { collection, query, where, doc, getDoc, onSnapshot,getDocs } from 'firebase/firestore';
import { firebaseDB } from '@firebaseApi/firebase';
import { MemberContext } from '@context/memberContext';
import { Timestamp } from 'firebase/firestore';
// Import Swiper styles


const ChatTab: React.FC = () => {
  const navigate = useNavigate();
  const routes = all_routes;
  const [chatList, setChatList] = useState<any[]>([]); // 채팅방 리스트 상태
  const [activeTab,setActiveTab] = useState('전체 채팅');
  const { state } = useContext(MemberContext);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInitialChats = useCallback(async () => {
    if (!state) return;
    setLoading(true);
    const q = query(collection(firebaseDB, "chatRooms"), where("participants", "array-contains", state.uid));
    const querySnapshot = await getDocs(q);
    const initialChats = await Promise.all(querySnapshot.docs.map(async (docSnapshot) => {
      const chatData = docSnapshot.data();
      const participants = chatData.participants.filter((uid: string) => uid !== state.uid);

      const userPromises = participants.map(async (uid: string) => {
        const userRef = doc(firebaseDB, "member", uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
        return {
          uid: userData?.uid,
          mmNickName: userData?.mmNickName || userData?.mmName || "Unknown User",
          avatar: userData?.avatar || "assets/img/profiles/avatar-11.jpg",
        };
      });

      const users = await Promise.all(userPromises);
      const createdAt = chatData.createdAt instanceof Timestamp ? chatData.createdAt.toDate() : new Date();
      const lastMessageTime = chatData?.lastMessageTime?.toDate() || null;

      const formatDate = (date: Date) => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const diffDays = Math.floor((today.getTime() - targetDate.getTime()) / (1000 * 3600 * 24));

        if (diffDays === 0) return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        if (diffDays === 1) return `어제 ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
        if (date.getFullYear() === now.getFullYear())
          return date.toLocaleDateString([], { month: "2-digit", day: "2-digit" });
        return date.toLocaleDateString([], { year: "numeric", month: "2-digit", day: "2-digit" });
      };

      return {
        id: docSnapshot.id,
        name: users.map((user) => user.mmNickName).join(", "),
        avatar: users[0].avatar,
        lastMessage: chatData.lastMessage || "새 채팅방 ~!",
        time: lastMessageTime != null ? formatDate(lastMessageTime) : formatDate(createdAt),
        createdAt,
      };
    }));

    setChatList(initialChats); // 상태 갱신
    setLoading(false);
  }, [state]);
  useEffect(() => {
    if (state) {
      fetchInitialChats(); //초기
    }
  }, [state,fetchInitialChats]);
  useEffect(() => {
    if (!state) return;
    setLoading(true);
    const unsubscribe = onSnapshot(
      query(collection(firebaseDB, "chatRooms"), where("participants", "array-contains", state.uid)),
      async (querySnapshot) => {
        const updatedChats = await Promise.all(querySnapshot.docs.map(async (docSnapshot) => {
          const chatData = docSnapshot.data();
          const participants = chatData.participants.filter((uid: string) => uid !== state.uid);
  
          const userPromises = participants.map(async (uid: string) => {
            const userRef = doc(firebaseDB, "member", uid);
            const userSnapshot = await getDoc(userRef);
            const userData = userSnapshot.data();
            return {
              uid: userData?.uid,
              mmNickName: userData?.mmNickName || userData?.mmName || "Unknown User",
              avatar: userData?.avatar || "/assets/img/profiles/avatar-11.jpg",
            };
          });
  
          const users = await Promise.all(userPromises);
          const createdAt = chatData.createdAt instanceof Timestamp ? chatData.createdAt.toDate() : new Date();
          const lastMessageTime = chatData?.lastMessageTime?.toDate() || null;
  
          const formatDate = (date: Date) => {
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            const diffDays = Math.floor((today.getTime() - targetDate.getTime()) / (1000 * 3600 * 24));
  
            if (diffDays === 0) return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            if (diffDays === 1) return `어제 ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
            if (date.getFullYear() === now.getFullYear())
              return date.toLocaleDateString([], { month: "2-digit", day: "2-digit" });
            return date.toLocaleDateString([], { year: "numeric", month: "2-digit", day: "2-digit" });
          };
  
          return {
            id: docSnapshot.id,
            name: users.map((user) => user.mmNickName).join(", "),
            avatar: users[0].avatar,
            lastMessage: chatData.lastMessage || "새 채팅방 ~!",
            time: lastMessageTime != null ? formatDate(lastMessageTime) : formatDate(createdAt),
            createdAt,
          };
        }));
  
        setChatList(updatedChats); // 상태 갱신
        setLoading(false);
      }
    );
  
    // Cleanup
    return () => unsubscribe();
  }, [state]);
  
  if (loading) {
    return null; // 로딩 중에는 아무것도 렌더링하지 않음
  }
  return (
    <>
        {/* Chats sidebar */}
        <div id="chats" className="sidebar-content active ">
        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax='100vh'
            thumbMinSize={30}
            universal={false}
            hideTracksWhenNotNeeded={true}
          >
          <div className="">
            <div className="chat-search-header">
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4 className="mb-3">채팅</h4>
                <div className="d-flex align-items-center mb-3">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#new-chat"
                    className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"
                  >
                    <i className="ti ti-plus" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="fs-16 text-default"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#invite"
                        >
                          <i className="ti ti-send me-2" />
                          다른사람 초대
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Chat Search */}
              <div className="search-wrap">
                <form >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search For Contacts or Messages"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                </form>
              </div>
              {/* /Chat Search */}
            </div>
            {/* Online Contacts */}
            <div className="top-online-contacts">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-3">최근 채팅</h5>
                <div className="dropdown mb-3">
                  <Link
                    to="#"
                    className="text-default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item mb-1" to="#">
                        <i className="ti ti-eye-off me-2" />
                        최근 기록 숨기기
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-users me-2" />
                        온라인 회원
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4}
                    >
                    {chatList.length > 0 ? (
                  chatList.map((chat) => (<SwiperSlide key={chat.id}>
                      <Link to={`${routes.chat}/${chat.id}`} className="chat-status text-center">
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src={chat.avatar || "assets/img/profiles/avatar-11.jpg"}
                            alt="프로필이미지"
                            className="rounded-circle"
                          />
                        </div>
                        <p>{chat.name}</p>
                      </Link>
                    </SwiperSlide>
                    ))
                    ) : (
                      <div>없음</div>
                    )}
                  </Swiper>
                  
                </div>
              </div>
            </div>
            {/* /Online Contacts */}
            <div className="sidebar-body chat-body" id="chatsidebar">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="chat-title">{activeTab}</h5>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="text-default fs-16"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-filter" />
                  </Link>
                  <ul
                    className=" dropdown-menu dropdown-menu-end p-3"
                    id="innerTab"
                    role="tablist"
                  >
                    <li role="presentation">
                      <Link
                        className="dropdown-item active"
                        id="all-chats-tab"
                        data-bs-toggle="tab"
                        to="#all-chats"
                        role="tab"
                        aria-controls="all-chats"
                        aria-selected="true"
                        onClick={()=>setActiveTab('전체 채팅')}
                      >
                        전체 채팅
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="favourites-chat-tab"
                        data-bs-toggle="tab"
                        to="#favourites-chat"
                        role="tab"
                        aria-controls="favourites-chat"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Favourite Chats')}
                      >
                        Favourite Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="pinned-chats-tab"
                        data-bs-toggle="tab"
                        to="#pinned-chats"
                        role="tab"
                        aria-controls="pinned-chats"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Pinned Chats')}
                      >
                        Pinned Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="archive-chats-tab"
                        data-bs-toggle="tab"
                        to="#archive-chats"
                        role="tab"
                        aria-controls="archive-chats"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Archive Chats')}
                      >
                        Archive Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="trash-chats-tab"
                        data-bs-toggle="tab"
                        to="#trash-chats"
                        role="tab"
                        aria-controls="trash-chats"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Trash')}
                      >
                        Trash
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Left Chat Title */}
              <div className="tab-content" id="innerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all-chats"
                  role="tabpanel"
                  aria-labelledby="all-chats-tab"
                >
                  <div className="chat-users-wrap">
                    {chatList.length > 0 ? (
                  chatList.map((chat) => (
                    <div className="chat-list" key={chat.id}>
                      <Link  className="chat-user-list" to={`${routes.chat}/${chat.id}`}>
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src={chat.avatar || "/assets/img/profiles/avatar-11.jpg"}
                            className="rounded-circle border border-warning border-2"
                            alt="프로필이미지"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>{chat.name}</h6>
                            <p>{chat.lastMessage || '새 채팅방~!'}</p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">{chat.time}</span>
                            <div className="chat-pin">
                              <i className="ti ti-heart-filled text-warning me-2" />
                              <i className="ti ti-pin me-2" />
                              {chat.unreadCount != null && chat.unreadCount > 0 && (
                                <span className="count-message fs-12 fw-semibold">
                                  {chat.unreadCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>새 채팅방이 없습니다.</div>
                )}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          </Scrollbars>
        </div>
        {/* / Chats sidebar */}
    </>
  )
}

export default ChatTab
import React, { useState, useEffect } from 'react';
import ImageWithBasePath from '../imageWithBasePath';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../feature-module/router/all_routes';
import Scrollbars from 'react-custom-scrollbars-2';

// Member 타입 정의 (currentUser가 이 타입을 따름)
interface Member {
  mmBirthDate: string;
  mmDelNy: boolean;
  mmEmail: string;
  mmName: string;
  mmNickName: string;
  mmPassword: string;
  mmPhoneNum: string;
  mmRegDate: any; // Timestamp 대신 any로 설정 가능
}

interface ChatTabProps {
  currentUser: Member | null; // currentUser는 null일 수도 있음
}

const ChatTab: React.FC<ChatTabProps> = ({ currentUser }) => {
  const routes = all_routes;
  const [chatList, setChatList] = useState<any[]>([]); // 채팅방 리스트 상태

  // 로그인된 유저가 있을 경우 1:1 채팅방을 미리 추가
  useEffect(() => {
    if (currentUser) {
      const initialChat = {
        id: '1',
        name: currentUser.mmNickName || '테스트 사용자', // 현재 유저의 닉네임을 사용
        lastMessage: '안녕하세요!',
        time: new Date().toLocaleTimeString(),
        unreadCount: 3,
        avatar: 'assets/img/profiles/avatar-01.jpg', // 임시 아바타 이미지
      };
      setChatList([initialChat]);
    }
  }, [currentUser]);

  // 새 채팅방 추가 함수
  const addNewChat = (newChat: any) => {
    setChatList((prevChatList) => [...prevChatList, newChat]);
  };

  return (
    <>
      <div id="chats" className="sidebar-content active">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="100vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div>
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
                </div>
              </div>
            </div>

            {/* 채팅 목록 */}
            <div className="chat-users-wrap">
              {chatList.length > 0 ? 
                (chatList.map((chat) => (
                  <div className="chat-list" key={chat.id}>
                    <Link to={`${routes.chat}/${chat.id}`} className="chat-user-list">
                      <div className="avatar avatar-lg online me-2">
                        <ImageWithBasePath
                          src={chat.avatar}
                          className="rounded-circle border border-warning border-2"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>{chat.name}</h6>
                          <p>{chat.lastMessage}</p>
                        </div>
                        <div className="chat-user-time">
                          <span className="time">{chat.time}</span>
                          <div className="chat-pin">
                            <i className="ti ti-heart-filled text-warning me-2" />
                            <i className="ti ti-pin me-2" />
                            <span className="count-message fs-12 fw-semibold">
                              {chat.unreadCount}
                            </span>
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
        </Scrollbars>
      </div>
    </>
  );
};

export default ChatTab;

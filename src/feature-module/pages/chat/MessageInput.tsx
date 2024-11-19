import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MessageInputProps {
  onSendMessage: (message: string) => void; // 메시지 전송 함수
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState<{ [key: number]: boolean }>({});

  // 엔터키로 메시지 전송, Alt+Enter로 줄바꿈
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.altKey) {
      e.preventDefault();  // 엔터키로 전송할 때 기본 동작 방지
      handleSendMessage();
    } else if (e.key === 'Enter' && e.altKey) {
      setNewMessage(newMessage + '\n');  // Alt+Enter로 줄바꿈 추가
    }
  };

  // 메시지 입력값 변경 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  // 메시지 전송
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // 비어있는 메시지는 전송하지 않음
    onSendMessage(newMessage.trim()); // 상위 컴포넌트로 메시지 전송
    setNewMessage(''); // 입력창 비우기
  };

  // 이모지 토글
  const toggleEmoji = (groupId: number) => {
    setShowEmoji((prev) => ({
      ...prev,
      [groupId]: !prev[groupId], // 해당 그룹 이모지 표시 여부 토글
    }));
  };

  return (
    <div className="chat-footer">
      <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
        <div className="chat-footer-wrap">
          {/* 마이크 아이콘 */}
          <div className="form-item">
            <Link to="#" className="action-circle">
              <i className="ti ti-microphone" />
            </Link>
          </div>

          {/* 메시지 입력창 */}
          <div className="form-wrap">
            <input
              type="text"
              className="form-control"
              placeholder="Type Your Message"
              value={newMessage}
              onChange={handleInputChange} // 메시지 입력값 업데이트
              onKeyDown={handleKeyDown} // 키보드 이벤트 처리
            />
          </div>

          {/* 이모지 기능 */}
          <div className="form-item emoj-action-foot">
            <Link to="#" className="action-circle" onClick={() => toggleEmoji(17)}>
              <i className="ti ti-mood-smile" />
            </Link>

            {/* 이모지 리스트 */}
            <div
              className="emoj-group-list-foot down-emoji-circle"
              style={{ display: showEmoji[17] ? 'block' : 'none' }}
            >
              <ul>
                <li><Link to="#">😊</Link></li>
                <li><Link to="#">😂</Link></li>
                <li><Link to="#">😍</Link></li>
                <li><Link to="#">😎</Link></li>
                <li><Link to="#">🥺</Link></li>
                <li className="add-emoj">
                  <Link to="#">
                    <i className="ti ti-plus" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 파일 첨부 아이콘 */}
          <div className="form-item position-relative d-flex align-items-center justify-content-center ">
            <Link to="#" className="action-circle file-action position-absolute">
              <i className="ti ti-folder" />
            </Link>
          </div>

          {/* 메뉴 아이콘 */}
          <div className="form-item">
            <Link to="#" data-bs-toggle="dropdown">
              <i className="ti ti-dots-vertical" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end p-3">
              <Link to="#" className="dropdown-item">
                <i className="ti ti-camera-selfie me-2" />
                Camera
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="ti ti-photo-up me-2" />
                Gallery
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="ti ti-music me-2" />
                Audio
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="ti ti-map-pin-share me-2" />
                Location
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="ti ti-user-check me-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* 전송 버튼 */}
          <div className="form-btn">
            <button className="btn btn-primary" type="button" onClick={handleSendMessage}>
              <i className="ti ti-send" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;

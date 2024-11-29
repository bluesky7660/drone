import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MessageInputProps {
  onSendMessage: (message: string) => void; // 메시지 전송 함수
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState<{ [key: number]: boolean }>({});
  const [isSend, setIsSend] = useState(false);

  // 엔터키로 메시지 전송, Alt+Enter로 줄바꿈
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.altKey) {
      e.preventDefault();  // 엔터키로 전송할 때 기본 동작 방지
      handleSendMessage();
      // e.target.style.height = `${e.target.scrollHeight}px`;
    } else if (e.key === 'Enter' && e.altKey) {
      setNewMessage(newMessage + '\n');  // Alt+Enter로 줄바꿈 추가
    }
  };

  // 메시지 입력값 변경 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    // 자동 높이 조정
    e.target.style.height = 'auto';  // 먼저 높이를 자동으로 줄여줍니다.
    e.target.style.height = `${e.target.scrollHeight}px`;  // 입력된 텍스트에 맞게 높이를 조절합니다.
  };

  // 메시지 전송
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // 비어있는 메시지는 전송하지 않음
    onSendMessage(newMessage); // 상위 컴포넌트로 메시지 전송
    setIsSend(true);
    setNewMessage(''); // 입력창 비우기
    const textArea = document.querySelector('#inputChat') as HTMLTextAreaElement;
    if (textArea) {
      textArea.style.height = `38px`;  // 다시 높이 조정
    }
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
            {/* <input
              type="text"
              className="form-control"
              placeholder="Type Your Message"
              value={newMessage}
              onChange={handleInputChange} // 메시지 입력값 업데이트
              onKeyDown={handleKeyDown} // 키보드 이벤트 처리
            /> */}
            <textarea
                id="inputChat"
                className="inputChat form-control"
                placeholder="메세지 보내기"
                value={newMessage}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                rows={1}  // 처음에는 한 줄 크기
                style={{
                    resize: 'none', // 사용자가 크기를 조절할 수 없도록 함
                    overflowY: 'auto', // 스크롤 가능하도록 함
                    maxHeight: '80px', // 최대 높이 3줄(각각 약 40px)로 제한
                    minHeight: '38px',
                    height:'38px'
                }}
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../common/imageWithBasePath';
import useAuth from '@/etc/UseAuth';
import { Member } from '@context/memberContext';

interface StartVideoCallProps {
  selectedContact: Member | null;
}

const StartVideoCall: React.FC<StartVideoCallProps> = ({ selectedContact }) => {
  const [muteMic, setMuteMic] = useState(false);
  const [muteVideo, setMuteVideo] = useState(true);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [callTime, setCallTime] = useState(0); // Time in seconds
  const [isCallActive, setIsCallActive] = useState(false); // Indicates if the call is active
  const { currentUserId } = useAuth();

  // Declare timer outside the useEffect so it's accessible for cleanup
  let timer: NodeJS.Timeout;

  useEffect(() => {
    if (isCallActive) {
      timer = setInterval(() => {
        setCallTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // Clean up the interval when the component unmounts or the call ends
    return () => clearInterval(timer);
  }, [isCallActive]);

  const toggleCall = () => {
    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      setCallTime(0); // Reset time when starting a new call
    }
  };

  const toggleMute = () => {
    setMuteMic(!muteMic);
  };

  const toggleVideo = () => {
    setMuteVideo(!muteVideo);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setChatMessages([...chatMessages, newMessage]);
      setNewMessage('');
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {selectedContact ? (<div
        className="modal video-call-popup fade"
        id="start-video-call"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content d-flex flex-row">
            <div className='modal-inner'>
              <div className="modal-header d-flex border-0 pb-0">
                <div className="card bg-transparent-dark flex-fill border">
                  <div className="card-body d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-lg online me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-05.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <div>
                        <h6>{selectedContact?.mmNickName||selectedContact?.mmName}</h6>
                        <span>{selectedContact?.mmEmail}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge border border-primary text-primary badge-sm me-2">
                        <i className="ti ti-point-filled" />
                        {isCallActive ? formatTime(callTime) : '00:00:00'} 통화시간
                      </span>
                      <Link
                        to="#"
                        className="user-add bg-primary rounded d-flex justify-content-center align-items-center text-white"
                        onClick={toggleCall}
                      >
                        <i className="ti ti-user-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body border-0 pt-0">
                <div className="video-call-view br-8 overflow-hidden position-relative">
                  <ImageWithBasePath src="assets/img/video/video-member-01.jpg" alt="user-image" />
                  <div className={`mini-video-view active br-8 overflow-hidden position-absolute ${muteVideo ? 'no-video' : ''}`}>
                    <ImageWithBasePath src="assets/img/video/user-image.jpg" alt="" />
                    <div className="bg-soft-primary mx-auto default-profile rounded-circle align-items-center justify-content-center">
                      <span className="avatar avatar-lg rounded-circle bg-primary">
                        RG
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-0 pt-0">
                <div className="call-controll-block d-flex align-items-center justify-content-center rounded-pill">
                  <Link
                    to="#"
                    onClick={toggleMute}
                    className={`call-controll mute-bt d-flex align-items-center justify-content-center ${muteMic ? 'stop' : ''}`}
                  >
                    <i className={`ti ${muteMic ? 'ti-microphone-off' : 'ti-microphone'}`} />
                  </Link>
                  <Link
                    to="#"
                    className="call-controll d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-volume" />
                  </Link>
                  <Link
                    to="#"
                    onClick={toggleVideo}
                    className={`call-controll mute-video d-flex align-items-center justify-content-center ${muteVideo ? 'stop' : ''}`}
                  >
                    <i className={`ti ${muteVideo ? 'ti-video-off' : 'ti-video'}`} />
                  </Link>
                  <Link
                    to="#"
                    data-bs-dismiss="modal"
                    className="call-controll call-decline d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-phone" />
                  </Link>
                  <Link
                    to="#"
                    className="call-controll d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-mood-smile" />
                  </Link>
                  <Link
                    to="#"
                    className="call-controll d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-maximize" />
                  </Link>
                  <Link
                    to="#"
                    className="call-controll d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-dots" />
                  </Link>
                </div>
              </div>
            </div>
            {/* 채팅창 추가 */}
            <div className='modal-side'>
              <div className="chat-section">
                <div className="chat-messages">
                  {chatMessages.map((message, index) => (
                    <div key={index} className="chat-message">
                      <span>{message}</span>
                    </div>
                  ))}
                </div>
                <div className="chat-input d-flex" style={{ position: 'absolute', bottom:"10px", left:"10px",right:"10px" }}>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    className="form-control"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button onClick={handleSendMessage} className="btn btn-primary text-nowrap">
                    전송
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>) : null}
    </>
  );
};

export default StartVideoCall;

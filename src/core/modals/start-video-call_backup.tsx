import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../common/imageWithBasePath';
import useAuth from '@/etc/UseAuth';
import { Member } from '@context/memberContext';
import DailyIframe ,{DailyCall,DailyEvent } from '@daily-co/daily-js';
// import DailyVideo  ,{DailyCall } from '@daily-co/daily-js';
import {useContact} from '@context/contactContext';
import {useDaily} from '@context/dailyContext'



const StartVideoCall: React.FC = () => {
  // const videoContainerRef = useRef<HTMLIFrameElement | null>(null);
  const videoContainerRef = useRef<any>(null);
  const [muteMic, setMuteMic] = useState(false);
  const [muteVideo, setMuteVideo] = useState(true);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [callTime, setCallTime] = useState(0); // Time in seconds
  const [isCallActive, setIsCallActive] = useState(false); // Indicates if the call is active
  const { selectedContact, setSelectedContact } = useContact();
  const { roomUrl, isVideoCallActive, setIsVideoCallActive, onClose } = useDaily();
  const [dailyIframe, setDailyIframe] = useState<any | null>(null);
  const [isIframeCreated, setIsIframeCreated] = useState(false);

  // const videoRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // const { currentUserId } = useAuth();
  // const callFrame = useRef<any | null>(null);

  
  useEffect(() => {
    const container = document.getElementById('daily-frame-container');
    if(container){
      if (roomUrl && !videoContainerRef.current) { // callFrame.current가 null이면 새로 생성
        videoContainerRef.current = DailyIframe.createFrame({
          url: roomUrl,
          showLeaveButton: true,
        });
    
        
        // if (container) {
        //   callFrame.current.attach(container);
        // }
    
        videoContainerRef.current.on('joined-meeting', () => {
          console.log('Joined meeting:');
          setIsCallActive(true);
        });
    
        videoContainerRef.current.on('left-meeting', () => {
          console.log('Left the meeting');
          setIsCallActive(false);
        });
      }
    
      return () => {
        if (videoContainerRef.current) {
          videoContainerRef.current.destroy();
          videoContainerRef.current = null; // 인스턴스 제거 후 null 설정
        }
      };
    }
  }, [roomUrl]);
  console.log("DailyIframe");
  // Declare timer outside the useEffect so it's accessible for cleanup
  // useEffect(() => {
  //   // DailyIframe 인스턴스 생성 (한 번만 실행)
  //   console.log("DailyIframe2");
  //   console.log("dailyIframe:",dailyIframe);
  //   console.log("roomUrl:",roomUrl);
  //   if (isIframeCreated==false && roomUrl) {
  //     console.log("videoContainerRef.current && roomUrl");
  //     const newIframe = DailyIframe.createFrame(videoContainerRef.current, {
  //       iframeStyle: {
  //         width: "100%",
  //         height: "100%",
  //         border: "none",
  //         // visibility: 'hidden',
  //       },
  //       showLeaveButton: true,
  //     });
  
  //     newIframe.load({ url: roomUrl });
  //     setDailyIframe(newIframe);
  
  //     // newIframe.on('joined-meeting', async () => {
  //     //   try {
  //     //     // 로컬 화면 스트림 가져오기
  //     //     const localStream = await newIframe.startCamera();
  //     //     if (localStream && videoContainerRef.current) {
  //     //       console.log("localStream && videoContainerRef.current");
  //     //       // 비디오 스트림을 렌더링할 요소 생성
  //     //       const videoElement = document.createElement('video');
  //     //       videoElement.autoplay = true;
  //     //       videoElement.playsInline = true;
  //     //       videoElement.style.width = '100%';
  //     //       videoElement.style.height = '100%';
  //     //       // `srcObject`가 올바른 타입인지 확인한 후 할당
  //     //       if (localStream instanceof MediaStream) {
  //     //         videoElement.srcObject = localStream;
  //     //         videoContainerRef.current.appendChild(videoElement);
  //     //       } else {
  //     //         console.error('Invalid stream type:', localStream);
  //     //       }
  //     //     }
  //     //     setIsIframeCreated(true);
  //     //   } catch (error) {
  //     //     console.error('카메라 스트림을 시작할 수 없습니다:', error);
  //     //   }
  //     // });
  //     // 컴포넌트 언마운트 시 DailyIframe 인스턴스 정리
  //     return () => {
  //       if (dailyIframe) {
  //         dailyIframe.destroy();
  //       }
  //     };
  //   }
  
    
  // }, [roomUrl]);
  

  useEffect(() => {
    if (isCallActive) {
      timerRef.current = setInterval(() => {
        setCallTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  
    // 컴포넌트 언마운트 시 클리어
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCallActive]);

  const toggleCall = () => {
    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      setCallTime(0); // 새로 시작할 때 시간 리셋
    }
  };

  // 비디오 켜기/끄기
  const toggleVideo = () => {
    if (dailyIframe) {
      dailyIframe.setLocalVideo(!dailyIframe.isLocalVideoEnabled());
      setMuteVideo(!muteVideo);
    }
  };

  // 마이크 켜기/끄기
  const toggleMute = () => {
    if (dailyIframe) {
      dailyIframe.setLocalAudio(!dailyIframe.isLocalAudioEnabled());
      setMuteMic(!muteMic);
    }
  };
  //화면공유
  const toggleScreenShare = () => {
    if (dailyIframe) {
      if (dailyIframe.isScreenSharing()) {
        dailyIframe.stopScreenShare();
      } else {
        dailyIframe.startScreenShare();
      }
    }
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
  // if (!roomUrl) return null;
  return (
    <>
      {/* {selectedContact&&isVideoCallActive ? ( */}
        <div
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
                <div className={`video-call-view br-8 overflow-hidden position-relative ${muteVideo ? 'no-video' : ''}`}>
                  {/* <iframe
                      className='video-box'
                      src={roomUrl||undefined}
                      style={{ width: '100%', height: '600px', border: 'none' }}
                      title="Video Call"
                    ></iframe> */}
                    {/*{isVideoCallActive && <iframe
                      className='video-box'
                      ref={videoContainerRef}
                      // src={roomUrl||undefined}
                      style={{ width: '100%', height: '600px', border: 'none' }}
                      title="Video Call"
                    ></iframe>}*/}
                  <div id="daily-frame-container" ref={videoContainerRef}></div>
                  <div className={`mini-video-view active br-8 overflow-hidden position-absolute ${muteVideo ? 'no-video' : ''}`}>
                    {/* <ImageWithBasePath src="assets/img/video/user-image.jpg" alt="" /> */}
                    {/* <div className="video-container">
                      <div id="daily-frame-container" className="video-frame" ref={videoRef}></div>
                    </div> */}
                    <ImageWithBasePath src="assets/img/video/video-member-01.jpg" alt="user-image" />
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
                    onClick={onClose}
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
      </div>
      {/* ) : null} */}
    </>
  );
};

export default StartVideoCall;

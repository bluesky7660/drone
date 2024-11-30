import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../common/imageWithBasePath'
import {SavedGroupContacts,Contact} from '@etc/UseContacts';
import {useContact} from '@context/contactContext';
import useAuth from '@/etc/UseAuth';
import StartVideoCall from './start-video-call'
import axios,{AxiosError } from 'axios';
import {useDaily} from '@context/dailyContext'

// type Contact = {
//   uid: string;
//   name: string;
//   email: string;
//   lastSeen: string;
//   avatar: string;
// };
const NewCall = () => {
  const {currentUserId} = useAuth();
  const contacts = SavedGroupContacts(currentUserId);
  const { selectedContact, setSelectedContact } = useContact();
  // const [isVideoCallOpen, setVideoCallOpen] = useState(false);
  const { setRoomUrl, setIsVideoCallActive } = useDaily();

  const createRoom = async () => {
    console.log('API Key:', process.env.REACT_APP_DAILY_API_KEY);
    try {
      const requestBody = {
        properties: {
          // name: `${selectedContact?.mmNickName || selectedContact?.mmName} 화상통화방`,
          exp: Math.floor(Date.now() / 1000) + 3600, // 만료 시간 설정 (1시간 후)
        },
      };
  
      const response = await axios.post(
        'https://api.daily.co/v1/rooms',
        requestBody,
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_DAILY_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response data:', response.data);
      const createdRoomUrl = response.data.url;
      if (response.data && createdRoomUrl) {
        setRoomUrl(createdRoomUrl);
        setIsVideoCallActive(true);
      } else {
        throw new Error('방 생성 실패: URL을 받을 수 없습니다.');
      }
    } catch (error) {
      console.error('서버리스 함수 호출 중 에러 발생:', error);
      if (error instanceof AxiosError) {
        console.error('Error details:', error.response?.data);
      } else {
        // AxiosError가 아닐 경우 일반 에러 처리
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  const handleClick = async (contact :Contact) => {
    setSelectedContact(contact.uid);
    // 상태가 업데이트된 후 createRoom을 호출
    console.log("selectedContact2:",selectedContact);
    await new Promise(resolve => setTimeout(resolve, 0)); // 상태 업데이트 후 대기
    createRoom();
  };

  return (
    <>
    
    {/* Add Call */}
  <div className="modal fade" id="new-call">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">새 통화</h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <form >
            <div className="search-wrap contact-search mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <Link to="#" className="input-group-text">
                  <i className="ti ti-search" />
                </Link>
              </div>
            </div>
            <h6 className="mb-3 fw-medium fs-16">연락처</h6>
            <div className="contact-scroll contact-select mb-3">
              {Object.keys(contacts).map((letter) => (
                <div className="mb-4" key={letter}>
                  <h6 className="mb-2">{letter}</h6>
                  {contacts[letter].map((contact: Contact) => 
                    // 현재 로그인한 유저 제외하고 목록에 보여주기
                    (
                    <div key={contact.uid} className="contact-user d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src={contact.avatar}
                            alt="프로필이미지"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="contact-user-info">
                          <div className="contact-user-msg">
                            <h6>{contact.name}</h6>
                            <small>{contact.email}</small>
                          </div>
                        </div>
                      </div>
                      <div className="d-inline-flex">
                        <a className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle me-2" 
                        data-bs-toggle="modal" 
                        data-bs-target="#voice_attend" 
                        onClick={() => {
                          setSelectedContact(contact.uid); // 클릭 시 선택된 연락처 상태 업데이트
                        }}
                        href="/call">
                          <span><i className="ti ti-phone"></i></span>
                        </a>
                        <div className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle" 
                          data-bs-toggle="modal" 
                          data-bs-target="#start-video-call"
                            onClick={() => {
                              setSelectedContact(contact.uid); // 선택된 연락처 상태 업데이트
                              if (selectedContact) {
                                createRoom();
                                // 모달을 수동으로 열기
                                const modalElement = document.getElementById('start-video-call');
                                if (modalElement) {
                                  modalElement.classList.add('show');
                                  modalElement.style.display = 'block';
                                }
                              }
                            }}
                        // href="/call"
                        >
                          <span><i className="ti ti-video"></i></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <StartVideoCall/>
  {/* {selectedContact && } */}
  {/* /Add Call */}</>
  )
}

export default NewCall
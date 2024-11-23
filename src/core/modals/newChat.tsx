import React, {} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB } from '@firebaseApi/firebase';  // Firebase 초기화된 파일
import ImageWithBasePath from '@/core/common/imageWithBasePath';
import {AllContacts} from '@etc/UseContacts';
import {ContactSelect} from '@etc/ContactSelect';
import useAuth from '@/etc/UseAuth';

const NewChat = () => {
  // const [currentUserId, setCurrentUserId] = useState<string | null>(null);  // 현재 로그인된 유저 UID
  const {currentUserId} = useAuth();
  const contacts = AllContacts(currentUserId);    // 연락처 목록 // 선택된 유저들 UID
  const navigate = useNavigate();
  const { selectedContact, handleContactSelect,clearSelectedContact} = ContactSelect();

  // 1:1 채팅방 생성
  const createChatRoom = async () => {
    console.log("생성준비중");
    console.log("currentUserId:",currentUserId);
    if (!currentUserId || selectedContact== null) return;
  
    const partnerId = selectedContact; // 1:1 채팅방이므로 첫 번째 선택된 사람만 사용
    console.log("partnerId:",partnerId);
    // participants 배열에서 현재 사용자와 파트너가 둘 다 포함된 채팅방을 찾는 쿼리
    const chatRoomQuery = query(
      collection(firebaseDB, 'chatRooms'),
      where('participants', 'array-contains', currentUserId) // currentUserId만 기준으로 필터링
    );
  
    const querySnapshot = await getDocs(chatRoomQuery);
    console.log("querySnapshot:", querySnapshot.empty);
  
    // 이미 currentUserId와 partnerId가 포함된 채팅방이 있는지 확인
    const existingChatRoom = querySnapshot.docs.find(doc =>
      doc.data().participants.includes(partnerId) // partnerId도 포함되어 있는지 확인
    );
  
    if (existingChatRoom) {
      console.log("이미 채팅방이 존재합니다.");
      navigate(`/chat/${existingChatRoom.id}`);
    } else {
      console.log("방생성중");
      // 채팅방이 없으면 새로 생성
      const docRef = await addDoc(collection(firebaseDB, 'chatRooms'), {
        participants: [currentUserId, partnerId],
        messages: [],
        createdAt: new Date(),
      });
      navigate(`/chat/${docRef.id}`);
    }
    console.log("선택해제");
    // 여기에 채팅방 페이지로 리다이렉트 할 수 있습니다 (예: react-router-dom 사용)
    clearSelectedContact();
  };
  // const handleCreateChat = () => {
  //   if (currentUserId && selectedContact.length > 0) {
  //     createChatRoom(currentUserId, selectedContact[0], navigate);
  //   }
  // };

  return (
    <>
      {/* New Chat Modal */}
      <div className="modal fade" id="new-chat" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">새로운 채팅</h4>
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
              <form>
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
                  {contacts.map((contact) => (
                    // 현재 로그인한 유저 제외하고 목록에 보여주기
                    currentUserId !== contact.uid && (
                      <label htmlFor={`saved-contact-${contact.uid}`}
                        key={contact.uid}
                        className="contact-user d-flex align-items-center justify-content-between"
                      >
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-lg">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="ms-2">
                            <h6>{contact.mmNickName || contact.mmName}</h6>
                            <small>{contact.mmEmail}</small>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name='chat_partner'
                            id={`saved-contact-${contact.uid}`}
                            checked={selectedContact == contact.uid}
                            onChange={() => handleContactSelect(contact.uid)}
                          />
                        </div>
                      </label>
                    )
                  ))}
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-outline-primary w-100"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      취소
                    </Link>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={() => {
                        createChatRoom();  // 채팅방 생성 함수 호출
                        clearSelectedContact();  // 선택된 연락처 초기화 함수 호출
                      }}
                      data-bs-dismiss="modal"
                    >
                      채팅 시작
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /New Chat Modal */}
    </>
  );
};

export default NewChat;

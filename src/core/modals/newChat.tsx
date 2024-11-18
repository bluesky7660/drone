import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB, auth } from '@firebaseApi/firebase';  // Firebase 초기화된 파일
import { onAuthStateChanged } from 'firebase/auth';
import ImageWithBasePath from '@/core/common/imageWithBasePath';

const NewChat = () => {
  const [contacts, setContacts] = useState<any[]>([]);  // 연락처 목록
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);  // 현재 로그인된 유저 UID
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);  // 선택된 유저들 UID

  // 현재 로그인된 유저 UID 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User UID:', user.uid); // 현재 로그인한 유저 UID 확인
        setCurrentUserId(user.uid);
      } else {
        console.log('No user is logged in');
      }
    });

    return () => unsubscribe();
  }, []);

  // member 컬렉션에서 모든 유저를 불러오기
  useEffect(() => {
    const fetchContacts = async () => {
      const contactsSnapshot = await getDocs(collection(firebaseDB, 'member'));
      const contactsList = contactsSnapshot.docs.map((doc) => ({
        uid: doc.id,  // Firebase 문서의 ID를 uid로 사용
        ...doc.data(),  // 문서의 데이터를 포함
      }));
      console.log('Fetched Contacts:', contactsList);  // 유저 목록 확인
      
    setContacts(contactsList);
    };

    if (currentUserId) {
      fetchContacts();
    }
  }, [currentUserId]);

  // 유저 선택/해제
  const handleContactSelect = (uid: string) => {
    setSelectedContacts((prevSelected) => {
      if (prevSelected.includes(uid)) {
        return prevSelected.filter((id) => id !== uid);
      } else {
        return [...prevSelected, uid];
      }
    });
  };

  // 1:1 채팅방 생성
  const createChatRoom = async () => {
    if (!currentUserId || selectedContacts.length === 0) return;
  
    const partnerId = selectedContacts[0]; // 1:1 채팅방이므로 첫 번째 선택된 사람만 사용
  
    // participants 배열에서 현재 사용자와 파트너가 둘 다 포함된 채팅방을 찾는 쿼리
    const chatRoomQuery = query(
      collection(firebaseDB, 'chatRooms'),
      where('participants', 'array-contains-any', [currentUserId, partnerId])
    );
  
    const querySnapshot = await getDocs(chatRoomQuery);
    if (querySnapshot.empty) {
      // 채팅방이 없으면 새로 생성
      await addDoc(collection(firebaseDB, 'chatRooms'), {
        participants: [currentUserId, partnerId],
        messages: [],
        createdAt: new Date(),
      });
    }

    // 여기에 채팅방 페이지로 리다이렉트 할 수 있습니다 (예: react-router-dom 사용)
  };

  return (
    <>
      {/* New Chat Modal */}
      <div className="modal fade" id="new-chat">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">New Chat</h4>
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
                <h6 className="mb-3 fw-medium fs-16">Contacts</h6>
                <div className="contact-scroll contact-select mb-3">
                  {contacts.map((contact) => (
                    // 현재 로그인한 유저 제외하고 목록에 보여주기
                    currentUserId !== contact.uid && (
                      <label htmlFor={`contact-${contact.uid}`}
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
                            id={`contact-${contact.uid}`}
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
                      Cancel
                    </Link>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={createChatRoom}
                      data-bs-dismiss="modal"
                    >
                      Start Chat
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

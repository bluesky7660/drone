import React from 'react';
import { Link } from 'react-router-dom'
import { collection, addDoc, query, where, getDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { firebaseDB } from '@firebaseApi/firebase';
import ImageWithBasePath from '@/core/common/imageWithBasePath';
import {AllContacts,SavedContacts} from '@etc/UseContacts';
import {ContactSelects} from '@etc/ContactSelect';
import useAuth from '@/etc/UseAuth';


const AddContact = () => {
  const {currentUserId} = useAuth(); // 현재 로그인된 유저 UID
  const contacts = AllContacts(currentUserId);    // 연락처 목록
  const { selectedContacts, handleContactSelects, clearSelectedContacts} = ContactSelects();
  const savedContacts = SavedContacts(currentUserId);

  const addContact = async () => {
    try {
      const userRef = doc(firebaseDB, `member/${currentUserId}`);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        console.log("사용자 문서 생성:",currentUserId);
        await setDoc(userRef, { name: currentUserId }); // 사용자 문서 생성
      }
      // 각 선택된 연락처를 Firestore에 추가 (예: memberId의 서브컬렉션)
      for (const contactId of selectedContacts) {
        console.log("contactId:",contactId);
        await setDoc(doc(firebaseDB, `member/${currentUserId}/contacts`, contactId), {
          contactId: contactId, // 연락처 문서 ID
        });
      } 
      clearSelectedContacts();
    }catch (error) {
      console.error("Error 연락처추가:", error);
    }
  };
  const filteredContacts = contacts.filter(contact => 
    !savedContacts.some(savedContact => savedContact.uid === contact.uid)
  );
  return (
    <>
    {/* Add Contact */}
    <div className="modal fade" id="add-contact">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">연락처 추가</h4>
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
                {filteredContacts.map((contact) => (
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
                          checked={selectedContacts.includes(contact.uid)}
                          onChange={() => handleContactSelects(contact.uid)}
                        />
                      </div>
                    </label>
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
                    onClick={addContact}
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
  {/* /Add Contact */}
 
</>

  )
}

export default AddContact
import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../common/imageWithBasePath'
import {SavedGroupContacts} from '@etc/UseContacts';
import useAuth from '@/etc/UseAuth';

type Contact = {
  uid: string;
  name: string;
  email: string;
  lastSeen: string;
  avatar: string;
};
const NewCall = () => {
  const {currentUserId} = useAuth();
  const contacts = SavedGroupContacts(currentUserId);
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
                    <Link className="contact-user d-flex align-items-center justify-content-between" to="#">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-lg">
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
                        data-bs-target="#voice_call" 
                        href="/call">
                          <span><i className="ti ti-phone"></i></span>
                        </a>
                          <a className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle" 
                          data-bs-toggle="modal" 
                          data-bs-target="#video-call" 
                          href="/call">
                            <span><i className="ti ti-video"></i></span>
                          </a>
                        </div>
                    </Link>
                  ))}
                </div>
                ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Call */}</>
  )
}

export default NewCall
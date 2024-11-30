import { useEffect } from 'react';
import ImageWithBasePath from '../imageWithBasePath'
import { Link } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars-2'
import {SavedGroupContacts} from '@etc/UseContacts';
import useAuth from '@/etc/UseAuth';

type Contact = {
  uid: string;
  name: string;
  lastSeen: string;
  avatar: string;
};
const ContactTab = () => {
  const {currentUserId} = useAuth();
  const contacts = SavedGroupContacts(currentUserId);
  useEffect(() => {
  });
  return (
    <>
        {/* Chats sidebar */}
        <div className="sidebar-content active slimscroll">
        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax='100vh'
            thumbMinSize={30}
            universal={false}
            hideTracksWhenNotNeeded={true}
          >
          <div className="slimscroll">
            <div className="chat-search-header">
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4 className="mb-3">연락처</h4>
                <div className="d-flex align-items-center mb-3">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#add-contact"
                    className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"
                  >
                    <i className="ti ti-plus" />
                  </Link>
                </div>
              </div>
              {/* Chat Search */}
              <div className="search-wrap">
                <form >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="연락처 검색"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                </form>
              </div>
              {/* /Chat Search */}
            </div>
            <div className="sidebar-body chat-body">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>모든 연락처</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {Object.keys(contacts).map((letter) => (
                <div className="mb-4" key={letter}>
                  <h6 className="mb-2">{letter}</h6>
                  {contacts[letter].map((contact: Contact) => 
                    // 현재 로그인한 유저 제외하고 목록에 보여주기
                    (
                    <div key={contact.uid} className="chat-list">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#contact-details"
                        className="chat-user-list"
                      >
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src={contact.avatar}
                            alt="프로필이미지"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>{contact.name}</h6>
                            <p>last seen 5 days ago</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                ))}
              </div>
            </div>
          </div>
          </Scrollbars>
        </div>
        {/* / Chats sidebar */}
    </>
  )
}

export default ContactTab
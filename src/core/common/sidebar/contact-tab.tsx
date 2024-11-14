import React from 'react'
import ImageWithBasePath from '../imageWithBasePath'
import { Link } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars-2'
const ContactTab = () => {
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
                <h4 className="mb-3">Contacts</h4>
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
                      placeholder="Search Contacts"
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
                <h5>All Contacts</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                <div className="mb-4">
                  <h6 className="mb-2">A</h6>
                  <div className="chat-list">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#contact-details"
                      className="chat-user-list"
                    >
                      <div className="avatar avatar-lg online me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>Aaryian Jose</h6>
                          <p>last seen 5 days ago</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">C</h6>
                  <div className="chat-list">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#contact-details"
                      className="chat-user-list"
                    >
                      <div className="avatar avatar-lg offline me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>Clyde Smith</h6>
                          <p>is busy now!</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="chat-list">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#contact-details"
                      className="chat-user-list"
                    >
                      <div className="avatar avatar-lg online me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-04.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>Carla Jenkins</h6>
                          <p>is online now</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">D</h6>
                  <div className="chat-list">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#contact-details"
                      className="chat-user-list"
                    >
                      <div className="avatar avatar-lg away me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-14.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>Danielle Baker</h6>
                          <p>last seen a week ago</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">E</h6>
                  <div className="chat-list">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#contact-details"
                      className="chat-user-list"
                    >
                      <div className="avatar avatar-lg online me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>Edward Lietz</h6>
                          <p>Do you know which App or ...</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">F</h6>
                  <div className="chat-list">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#contact-details"
                      className="chat-user-list"
                    >
                      <div className="avatar avatar-lg online me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-07.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>Federico Wells</h6>
                          <p>last seen 10 min ago</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
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
import React from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";

const GroupTab = () => {
  const routes = all_routes;
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
              <h4 className="mb-3">Group</h4>
              <div className="d-flex align-items-center mb-3">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#new-group"
                  className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"
                >
                  <i className="ti ti-plus" />
                </Link>
                <div className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    className="fs-16 text-default"
                  >
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu p-3">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#invite"
                      >
                        <i className="ti ti-send me-2" />
                        Invite Others
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Chat Search */}
            <div className="search-wrap">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search For Contacts or Messages"
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
              <h5>All Groups</h5>
            </div>
            {/* /Left Chat Title */}
            <div className="chat-users-wrap">
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-01.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>The Dream Team</h6>
                      <p>
                        <span className="animate-typing">
                          is typing
                          <span className="dot mx-1" />
                          <span className="dot me-1" />
                          <span className="dot" />
                        </span>
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-pin me-2" />
                        <span className="count-message fs-12 fw-semibold">
                          12
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-02.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>The Meme Team</h6>
                      <p>Do you know which...</p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">06:12 AM</span>
                      <div className="chat-pin">
                        <i className="ti ti-pin me-2" />
                        <i className="ti ti-checks text-success" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-03.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Tech Talk Tribe</h6>
                      <p>Haha oh man</p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">03:15 AM</span>
                      <div className="chat-pin">
                        <i className="ti ti-pin me-2" />
                        <span className="count-message fs-12 fw-semibold">
                          55
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg bg-pink avatar-rounded me-2">
                    <span className="avatar-title fs-14 fw-medium">AG</span>
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Amfr_boys_Group</h6>
                      <p>
                        <i className="ti ti-photo me-2" />
                        Photo
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">Yesterday</span>
                      <div className="chat-pin">
                        <span className="count-message fs-12 fw-semibold">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-04.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>The Academic Alliance</h6>
                      <p className="text-success">
                        <i className="ti ti-video-plus me-2" />
                        Incoming Video Call
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">Sunday</span>
                      <div className="chat-pin">
                        <i className="ti ti-checks text-success" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-05.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>The Chill Zone</h6>
                      <p>
                        <i className="ti ti-photo me-2" />
                        Photo
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">Wednesday</span>
                      <div className="chat-pin">
                        <i className="ti ti-pin me-2" />
                        <span className="count-message fs-12 fw-semibold">
                          12
                        </span>
                        <i className="bx bx-check-double" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-06.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Squad Goals</h6>
                      <p>
                        <i className="ti ti-file me-2" />
                        Document
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-checks text-success" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg bg-skyblue online avatar-rounded me-2">
                    <span className="avatar-title fs-14 fw-medium">GU</span>
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Gustov_family</h6>
                      <p>
                        Please Check
                        <span className="text-primary ms-1">@rev</span>
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">24 Jul 2024</span>
                      <div className="chat-pin">
                        <i className="ti ti-heart-filled text-warning me-2" />
                        <span className="count-message fs-12 fw-semibold">
                          25
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-07.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Scholars Society</h6>
                      <p className="text-danger">
                        <i className="ti ti-video-off me-2" />
                        Missed Video Call
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-heart-filled text-warning me-2" />
                        <i className="ti ti-checks text-success" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-08.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Travel Tribe</h6>
                      <p>Hi How are you</p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <span className="count-message fs-12 fw-semibold">
                          25
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-09.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Fitness Fanatics</h6>
                      <p>Do you know which...</p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-heart-filled text-warning" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-10.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>The Quest Crew</h6>
                      <p>Haha oh man</p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-pin me-2" />
                        <i className="ti ti-checks text-success" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-11.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Game Changers</h6>
                      <p>
                        <i className="ti ti-map-pin-plus me-2" />
                        Location
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-checks text-success" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-list">
                <Link to={routes.groupChat} className="chat-user-list">
                  <div className="avatar avatar-lg online me-2">
                    <ImageWithBasePath
                      src="assets/img/groups/group-12.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div className="chat-user-info">
                    <div className="chat-user-msg">
                      <h6>Movie Buffs</h6>
                      <p>
                        <i className="ti ti-video me-2" />
                        Video
                      </p>
                    </div>
                    <div className="chat-user-time">
                      <span className="time">02:40 PM</span>
                      <div className="chat-pin">
                        <i className="ti ti-heart-filled text-warning me-2" />
                        <span className="count-message fs-12 fw-semibold">
                          25
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="chat-dropdown">
                  <Link className="#" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-box-align-right me-2" />
                        Archive Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-logout-2 me-2" />
                        Exit Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-pinned me-2" />
                        Pin Group
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-square-check me-2" />
                        Mark as Unread
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Scrollbars>
      </div>
      {/* / Chats sidebar */}
    </>
  );
};

export default GroupTab;

import React, { useState } from 'react'
import ImageWithBasePath from '../imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../feature-module/router/all_routes'
import Scrollbars from 'react-custom-scrollbars-2'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const ChatTab = () => {
    const routes = all_routes;
    const [activeTab,setActiveTab] = useState('전체 채팅')
  return (
    <>
        {/* Chats sidebar */}
        <div id="chats" className="sidebar-content active ">
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
          <div className="">
            <div className="chat-search-header">
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4 className="mb-3">Chats</h4>
                <div className="d-flex align-items-center mb-3">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#new-chat"
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
                          다른사람 초대
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Chat Search */}
              <div className="search-wrap">
                <form >
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
            {/* Online Contacts */}
            <div className="top-online-contacts">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-3">최근 채팅</h5>
                <div className="dropdown mb-3">
                  <Link
                    to="#"
                    className="text-default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item mb-1" to="#">
                        <i className="ti ti-eye-off me-2" />
                        최근 기록 숨기기
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-users me-2" />
                        온라인 회원
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4}
                    >
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online d-block">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="Image"
                          className="rounded-circle"
                        />
                      </div>
                      <p>Nichol</p>
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online d-block">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-12.jpg"
                          alt="Image"
                          className="rounded-circle"
                        />
                      </div>
                      <p>Titus</p>
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online d-block">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-14.jpg"
                          alt="Image"
                          className="rounded-circle"
                        />
                      </div>
                      <p>Geoffrey</p>
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online d-block">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-15.jpg"
                          alt="Image"
                          className="rounded-circle"
                        />
                      </div>
                      <p>Laverty</p>
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online bg-primary avatar-rounded">
                        <span className="avatar-title fs-14 fw-medium">KG</span>
                      </div>
                      <p>Kitamura</p>
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online d-block">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="Image"
                          className="rounded-circle"
                        />
                      </div>
                      <p>Mark</p>
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to={routes.chat} className="chat-status text-center">
                      <div className="avatar avatar-lg online d-block">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="Image"
                          className="rounded-circle"
                        />
                      </div>
                      <p>Smith</p>
                    </Link>
                    </SwiperSlide>
                    </Swiper>
                  
                </div>
              </div>
            </div>
            {/* /Online Contacts */}
            <div className="sidebar-body chat-body" id="chatsidebar">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="chat-title">{activeTab}</h5>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="text-default fs-16"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-filter" />
                  </Link>
                  <ul
                    className=" dropdown-menu dropdown-menu-end p-3"
                    id="innerTab"
                    role="tablist"
                  >
                    <li role="presentation">
                      <Link
                        className="dropdown-item active"
                        id="all-chats-tab"
                        data-bs-toggle="tab"
                        to="#all-chats"
                        role="tab"
                        aria-controls="all-chats"
                        aria-selected="true"
                        onClick={()=>setActiveTab('전체 채팅')}
                      >
                        전체 채팅
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="favourites-chat-tab"
                        data-bs-toggle="tab"
                        to="#favourites-chat"
                        role="tab"
                        aria-controls="favourites-chat"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Favourite Chats')}
                      >
                        Favourite Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="pinned-chats-tab"
                        data-bs-toggle="tab"
                        to="#pinned-chats"
                        role="tab"
                        aria-controls="pinned-chats"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Pinned Chats')}
                      >
                        Pinned Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="archive-chats-tab"
                        data-bs-toggle="tab"
                        to="#archive-chats"
                        role="tab"
                        aria-controls="archive-chats"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Archive Chats')}
                      >
                        Archive Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="trash-chats-tab"
                        data-bs-toggle="tab"
                        to="#trash-chats"
                        role="tab"
                        aria-controls="trash-chats"
                        aria-selected="false"
                        onClick={()=>setActiveTab('Trash')}
                      >
                        Trash
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Left Chat Title */}
              <div className="tab-content" id="innerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all-chats"
                  role="tabpanel"
                  aria-labelledby="all-chats-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle border border-warning border-2"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>테스트</h6>
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
                              <i className="ti ti-heart-filled text-warning me-2" />
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>난나나</h6>
                            <p>Haha oh man 🔥</p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">03:15 AM</span>
                            <div className="chat-pin">
                              <i className="ti ti-pin me-2" /> {/*핀 아이콘*/}
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-pink avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Federico Wells</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-skyblue online avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            GU
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Estell Gibson</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sharon Ford</h6>
                            <p>Hi How are you 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Thomas Rethman</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Wilbur Martinez</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Danielle Baker</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-13.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Morkel Jerrin</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="favourites-chat"
                  role="tabpanel"
                  aria-labelledby="favourites-chat-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-pink avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Federico Wells</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle border border-warning border-2"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Mark Villiamss</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-skyblue online avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            GU
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Estell Gibson</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sharon Ford</h6>
                            <p>Hi How are you 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Thomas Rethman</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Wilbur Martinez</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Danielle Baker</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-13.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Morkel Jerrin</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pinned-chats"
                  role="tabpanel"
                  aria-labelledby="pinned-chats-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>나나</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Federico Wells</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-pink avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle border border-warning border-2"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Mark Villiamss</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-skyblue online avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            GU
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Estell Gibson</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sharon Ford</h6>
                            <p>Hi How are you 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Thomas Rethman</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Wilbur Martinez</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Danielle Baker</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-13.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Morkel Jerrin</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="archive-chats"
                  role="tabpanel"
                  aria-labelledby="archive-chats-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-pink avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Federico Wells</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle border border-warning border-2"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Mark Villiamss</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-skyblue online avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            GU
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Estell Gibson</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sharon Ford</h6>
                            <p>Hi How are you 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Thomas Rethman</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Wilbur Martinez</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Danielle Baker</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-13.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Morkel Jerrin</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="trash-chats"
                  role="tabpanel"
                  aria-labelledby="trash-chats-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle border border-warning border-2"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Mark Villiamss</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-pink avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Federico Wells</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg bg-skyblue online avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            GU
                          </span>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Estell Gibson</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sharon Ford</h6>
                            <p>Hi How are you 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Thomas Rethman</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Wilbur Martinez</h6>
                            <p>Haha oh man 🔥</p>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Danielle Baker</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.chat} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-13.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Morkel Jerrin</h6>
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
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-chat"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default ChatTab
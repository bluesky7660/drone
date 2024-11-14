import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../imageWithBasePath'
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import LogoutModal from '../../modals/logout-modal';
import Scrollbars from 'react-custom-scrollbars-2';
type PasswordField =  'confirmPassword' | 'newpassword' | 'oldpassword';
const SettingsTab = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    confirmPassword: false,
    newpassword:false,
    oldpassword:false
  });
  
  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const [showModal, setShowModal] = useState(false)
  return (
    <>
        {/* Profile sidebar */}
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
                <h4 className="mb-3">Settings</h4>
              </div>
              {/* Settings Search */}
              <div className="search-wrap">
                <form >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Settings"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                </form>
              </div>
              {/* /Settings Search */}
            </div>
            <div className="sidebar-body chat-body">
              {/* Account setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Account</h5>
                <div className="chat-file">
                  <div className="file-item">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="account-setting"
                    >
                      <div className="accordion-item others">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#chatuser-collapse"
                            aria-expanded="true"
                            aria-controls="chatuser-collapse"
                          >
                            <i className="ti ti-user me-2" />
                            Profile Info
                          </Link>
                        </h2>
                        <div
                          id="chatuser-collapse"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#account-setting"
                        >
                          <div className="accordion-body">
                            <div>
                              <div className="d-flex justify-content-center align-items-center">
                                <span className="set-pro avatar avatar-xxl rounded-circle mb-3 p-1">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-16.jpg"
                                    className="rounded-circle"
                                    alt="user"
                                  />
                                  <span className="add avatar avatar-sm d-flex justify-content-center align-items-center">
                                    <i className="ti ti-plus rounded-circle d-flex justify-content-center align-items-center" />
                                  </span>
                                </span>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="First Name"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-user" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Last Name"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-user" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Gender"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-user-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    {/* <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control datetimepicker"
                                      placeholder="Date of birth"
                                    /> */}
                                    <DatePicker getPopupContainer={(trigger) => trigger.parentElement || document.body}  className="form-control datetimepicker" onChange={onChange} />
                                    <span className="icon-addon">
                                      <i className="ti ti-calendar-event" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Country"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-map-2" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-item d-flex justify-content-between mb-3">
                                    <textarea
                                      className="form-control"
                                      placeholder="About"
                                      rows={3}
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-primary flex-fill"
                                  >
                                    <i className="ti ti-device-floppy me-2" />
                                    Save Changes
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item others mb-3">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#social-id"
                            aria-expanded="false"
                            aria-controls="social-id"
                          >
                            <i className="ti ti-social me-2" />
                            Social Profiles
                          </Link>
                        </h2>
                        <div
                          id="social-id"
                          className="accordion-collapse collapse"
                          data-bs-parent="#account-setting"
                        >
                          <div className="accordion-body">
                            <div className="chat-video">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Facebook"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-brand-facebook" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Google"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-brand-google" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Twitter"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-brand-twitter" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Linkedin"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-brand-linkedin" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="youtube"
                                    />
                                    <span className="icon-addon">
                                      <i className="ti ti-brand-youtube" />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-primary flex-fill"
                                  >
                                    <i className="ti ti-device-floppy me-2" />
                                    Save Changes
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="fs-14">
                          <Link to="#">
                            <i className="ti ti-lock-square text-gray me-2" />
                            Screen Lock
                          </Link>
                        </h6>
                        <div className="form-check form-switch d-flex justify-content-end align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Account setting */}
              {/* Security setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Security</h5>
                <div className="chat-file">
                  <div className="file-item">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="pwd-setting"
                    >
                      <div className="accordion-item others mb-3">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#set-pwd"
                            aria-expanded="false"
                            aria-controls="set-pwd"
                          >
                            <i className="ti ti-key me-2" />
                            Password
                          </Link>
                        </h2>
                        <div
                          id="set-pwd"
                          className="accordion-collapse collapse"
                          data-bs-parent="#pwd-setting"
                        >
                          <div className="accordion-body">
                            <div className="">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3">
                                  <input
                                type={passwordVisibility.oldpassword ? "text" : "password"}
                                className="pass-input form-control"
                            />
                            <span
                                className={`ti toggle-passwords ${
                                passwordVisibility.oldpassword ? "ti-eye" : "ti-eye-off"
                                }`}
                                onClick={() => togglePasswordVisibility("oldpassword")}
                            ></span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3">
                                  <input
                                type={passwordVisibility.newpassword ? "text" : "password"}
                                className="pass-input form-control"
                            />
                            <span
                                className={`ti toggle-passwords ${
                                passwordVisibility.newpassword ? "ti-eye" : "ti-eye-off"
                                }`}
                                onClick={() => togglePasswordVisibility("newpassword")}
                            ></span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3">
                                  <input
                                type={passwordVisibility.confirmPassword ? "text" : "password"}
                                className="pass-input form-control"
                            />
                            <span
                                className={`ti toggle-passwords ${
                                passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                                }`}
                                onClick={() => togglePasswordVisibility("confirmPassword")}
                            ></span>
                                  </div>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-primary flex-fill"
                                  >
                                    <i className="ti ti-device-floppy me-2" />
                                    Save Changes
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="fs-14">
                          <Link to="#">
                            <i className="ti ti-shield text-gray me-2" />
                            Two Factor Authentication
                          </Link>
                        </h6>
                        <div className="form-check form-switch d-flex justify-content-end align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Security setting */}
              {/* Privacy setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Privacy</h5>
                <div className="chat-file">
                  <div className="file-item ">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="privacy-setting"
                    >
                      <div className="mb-3">
                        <div className="accordion-item border-0 border-bottom">
                          <h2 className="accordion-header others">
                            <Link
                              to="#"
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse3"
                              aria-expanded="true"
                              aria-controls="chatuser-collapse3"
                            >
                              <i className="ti ti-mood-smile me-2" />
                              Profile Info
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse3"
                            className="accordion-collapse collapse "
                            data-bs-parent="#privacy-setting"
                          >
                            <div className="accordion-body">
                              <div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <select className="form-select">
                                      <option>Everyone</option>
                                      <option>Except</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-0 border-bottom">
                          <h2 className="accordion-header others">
                            <Link
                              to="#"
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse3-1"
                              aria-expanded="true"
                              aria-controls="chatuser-collapse3-1"
                            >
                              <i className="ti ti-eye me-2" />
                              Last Seen
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse3-1"
                            className="accordion-collapse collapse "
                            data-bs-parent="#privacy-setting"
                          >
                            <div className="accordion-body">
                              <div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <select className="form-select">
                                      <option>Everyone</option>
                                      <option>Except</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-0 border-bottom">
                          <h2 className="accordion-header others">
                            <Link
                              to="#"
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse3-2"
                              aria-expanded="true"
                              aria-controls="chatuser-collapse3-2"
                            >
                              <i className="ti ti-users-group me-2" />
                              Groups
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse3-2"
                            className="accordion-collapse collapse "
                            data-bs-parent="#privacy-setting"
                          >
                            <div className="accordion-body">
                              <div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <select className="form-select">
                                      <option>Everyone</option>
                                      <option>Except</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-0 border-bottom">
                          <h2 className="accordion-header others">
                            <Link
                              to="#"
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse3-3"
                              aria-expanded="true"
                              aria-controls="chatuser-collapse3-3"
                            >
                              <i className="ti ti-circle-dot me-2" />
                              Status
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse3-3"
                            className="accordion-collapse collapse "
                            data-bs-parent="#privacy-setting"
                          >
                            <div className="accordion-body">
                              <div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <select className="form-select mb-3">
                                      <option>Everyone</option>
                                      <option>Except</option>
                                    </select>
                                  </div>
                                  <div className="col-lg-12 d-flex">
                                    <Link
                                      to="#"
                                      className="btn btn-primary flex-fill"
                                    >
                                      <i className="ti ti-device-floppy me-2" />
                                      Save Changes
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="fs-14">
                          <Link to="#">
                            <i className="ti ti-checks text-gray me-2" />
                            Read Receipients
                          </Link>
                        </h6>
                        <div className="form-check form-switch d-flex justify-content-end align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Privacy setting */}
              {/* Chat setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Chat</h5>
                <div className="chat-file">
                  <div className="file-item ">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="chat-setting"
                    >
                      <div className="border-0 profile-list mb-3">
                        <div className="accordion-item border-0 border-bottom">
                          <h2 className="accordion-header border-0">
                            <Link
                              to="#"
                              className="accordion-button border-0 collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse4"
                              aria-expanded="true"
                              aria-controls="chatuser-collapse4"
                            >
                              <i className="ti ti-photo me-2" />
                              Background Images
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse4"
                            className="accordion-collapse border-0 collapse "
                            data-bs-parent="#chat-setting"
                          >
                            <div className="accordion-body border-0 pb-0">
                              <div className="chat-user-photo">
                                <div className="chat-img contact-gallery mb-3">
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-01.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-01.jpg"
                                        title="Demo 01"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-02.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-02.jpg"
                                        title="Demo 02"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-03.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-03.jpg"
                                        title="Demo 03"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-04.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-04.jpg"
                                        title="Demo 04"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-05.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-05.jpg"
                                        title="Demo 04"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-06.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-06.jpg"
                                        title="Demo 04"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-07.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-07.jpg"
                                        title="Demo 04"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="img-wrap">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-08.jpg"
                                      alt="img"
                                    />
                                    <div className="img-overlay-1">
                                      <Link
                                        className="gallery-img"
                                        data-fancybox="gallery-img"
                                        to="assets/img/gallery/gallery-08.jpg"
                                        title="Demo 04"
                                      />
                                      <span className="check-icon avatar avatar-md d-flex justify-content-center align-items-center">
                                        <i className="ti ti-check  d-flex justify-content-center align-items-center" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-primary flex-fill mb-3"
                                  >
                                    <i className="ti ti-device-floppy me-2" />
                                    Save Changes
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between profile-list align-items-center border-bottom pb-3 mb-3">
                        <h6 className="fs-14">
                          <Link to="#">
                            <i className="ti ti-clear-all text-gray me-2 " />
                            Clear All Chat
                          </Link>
                        </h6>
                        <div className="form-check form-switch d-flex justify-content-end align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center profile-list border-bottom pb-3 mb-3">
                        <h6 className="fs-14">
                          <Link to="#">
                            <i className="ti ti-trash text-gray me-2 " />
                            Delete All Chat
                          </Link>
                        </h6>
                        <div className="form-check form-switch d-flex justify-content-end align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="fs-14">
                          <Link to="#">
                            <i className="ti ti-restore text-gray me-2 " />
                            Chat Backup
                          </Link>
                        </h6>
                        <div className="form-check form-switch d-flex justify-content-end align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chat setting */}
              {/* Notification setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Notifications</h5>
                <div className="chat-file">
                  <div className="file-item ">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center profile-list border-bottom pb-3 mb-3">
                          <h6 className="fs-14">
                            <Link to="#">
                              <i className="ti ti-message text-gray me-2 " />
                              Message Notifications
                            </Link>
                          </h6>
                          <div className="form-check form-switch d-flex justify-content-end align-items-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center profile-list border-bottom pb-3 mb-3">
                          <h6 className="fs-14">
                            <Link to="#">
                              <i className="ti ti-trash text-gray me-2 " />
                              Show Previews
                            </Link>
                          </h6>
                          <div className="form-check form-switch d-flex justify-content-end align-items-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center profile-list border-bottom pb-3 mb-3">
                          <h6 className="fs-14">
                            <Link to="#">
                              <i className="ti ti-mood-smile text-gray me-2 " />
                              Show Reaction Notifications
                            </Link>
                          </h6>
                          <div className="form-check form-switch d-flex justify-content-end align-items-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center ">
                          <h6 className="fs-14">
                            <Link to="#">
                              <i className="ti ti-bell-ringing text-gray me-2 " />
                              Notification Sound
                            </Link>
                          </h6>
                          <div className="form-check form-switch d-flex justify-content-end align-items-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Notification setting */}
              {/* Language setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Language</h5>
                <div className="chat-file">
                  <div className="file-item ">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="language-setting"
                    >
                      <div>
                        <div className="accordion-item border-0">
                          <h2 className="accordion-header">
                            <Link
                              to="#"
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse5"
                              aria-expanded="false"
                              aria-controls="chatuser-collapse5"
                            >
                              <i className="ti ti-language me-2" />
                              Language
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse5"
                            className="accordion-collapse collapse "
                            data-bs-parent="#Language-setting"
                          >
                            <div className="accordion-body">
                              <div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <select className="form-select">
                                      <option>English</option>
                                      <option>French</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Language setting */}
              {/* Manage Device */}
              <div className="content-wrapper">
                <h5 className="sub-title">Manage Device</h5>
                <div className="chat-file">
                  <div className="file-item ">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="device-setting"
                    >
                      <div>
                        <div className="accordion-item border-0">
                          <h2 className="accordion-header">
                            <Link
                              to="#"
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#chatuser-collapse6"
                              aria-expanded="false"
                              aria-controls="chatuser-collapse6"
                            >
                              <i className="ti ti-eye me-2" />
                              Device History
                            </Link>
                          </h2>
                          <div
                            id="chatuser-collapse6"
                            className="accordion-collapse collapse "
                            data-bs-parent="#device-setting"
                          >
                            <div className="accordion-body">
                              <div className="device-option">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <div className="d-flex align-items-center">
                                    <span className="device-icon d-flex justify-content-center align-items-center bg-transparent-dark rounded-circle me-2">
                                      <i className="ti ti-device-laptop" />
                                    </span>
                                    <div>
                                      <h6 className="fs-16">
                                        Mac OS Safari 15.1
                                      </h6>
                                      <span className="fs-16">
                                        13 Jul 2024 at 03:15 PM
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-end align-items-center">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="mute"
                                        defaultChecked
                                      />
                                    </div>
                                    <Link to="#">
                                      <i className="ti ti-trash fs-16" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <div className="d-flex align-items-center">
                                    <span className="device-icon d-flex justify-content-center align-items-center bg-transparent-dark rounded-circle me-2">
                                      <i className="ti ti-device-laptop" />
                                    </span>
                                    <div>
                                      <h6 className="fs-16">
                                        Windows 11 Mozilla Firefox
                                      </h6>
                                      <span className="fs-16">
                                        06 Jul 2024 at 09:30 AM
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-end align-items-center">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="mute"
                                      />
                                    </div>
                                    <Link to="#">
                                      <i className="ti ti-trash fs-16" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <div className="d-flex align-items-center">
                                    <span className="device-icon d-flex justify-content-center align-items-center bg-transparent-dark rounded-circle me-2">
                                      <i className="ti ti-device-mobile" />
                                    </span>
                                    <div>
                                      <h6 className="fs-16">IOS Safari 15.1</h6>
                                      <span className="fs-16">
                                        28 Jun 2024 at 04:00 PM
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-end align-items-center">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="mute"
                                      />
                                    </div>
                                    <Link to="#">
                                      <i className="ti ti-trash fs-16" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-primary flex-fill"
                                  >
                                    <i className="ti ti-logout-2 me-2" />
                                    Logout From All Devices
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Manage Device */}
              {/* Others */}
              <div className="content-wrapper mb-0">
                <h5 className="sub-title">Others</h5>
                <div className="card mb-0">
                  <div className="card-body list-group profile-item">
                    <div
                      className="accordion accordion-flush chat-accordion list-group-item"
                      id="other-term"
                    >
                      <div className="accordion-item w-100">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button py-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#terms"
                            aria-expanded="false"
                            aria-controls="terms"
                          >
                            <i className="ti ti-file-text me-2" />
                            Terms &amp; Conditions
                          </Link>
                        </h2>
                        <div
                          id="terms"
                          className="accordion-collapse collapse"
                          data-bs-parent="#other-term"
                        >
                          <div className="accordion-body p-0 pt-3">
                            <textarea
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion accordion-flush chat-accordion list-group-item"
                      id="other-policy"
                    >
                      <div className="accordion-item w-100">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button py-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#privacy"
                            aria-expanded="false"
                            aria-controls="privacy"
                          >
                            <i className="ti ti-file-text me-2" />
                            Privacy Policy
                          </Link>
                        </h2>
                        <div
                          id="privacy"
                          className="accordion-collapse collapse"
                          data-bs-parent="#other-policy"
                        >
                          <div className="accordion-body p-0 pt-3">
                            <textarea
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#block-user"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-ban text-gray me-2" />
                          Blocked User
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#mute-user"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-volume-off text-gray me-2" />
                          Mute User
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-account"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-trash-x text-gray me-2" />
                          Delete Account
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item"
                      onClick={()=>setShowModal(true)}
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-logout text-gray me-2" />
                          Logout
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Others */}
            </div>
          </div>
          </Scrollbars>
        </div>
        {/* / Chats sidebar */}
    <LogoutModal showModal={showModal} setShowModal={setShowModal}/>

    </>
  )
}

export default SettingsTab
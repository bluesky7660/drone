import React from 'react'
import ImageWithBasePath from '../imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../feature-module/router/all_routes'
import Scrollbars from 'react-custom-scrollbars-2'
import { useMember } from '@hooks/useMember';

export const ProfileTab = () => {
    const routes = all_routes
    const { state, formattedPhone, formattedRegDate } = useMember();
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
                <h4 className="mb-3">프로필</h4>
              </div>
            </div>
            {/* Profile */}
            <div className="profile mx-3">
              <div className="border-bottom text-center pb-3 mx-1">
                <div className="d-flex justify-content-center ">
                  <span className="avatar avatar-xxxl online mb-4">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-16.jpg"
                      className="rounded-circle"
                      alt="user"
                    />
                  </span>
                </div>
                <div>
                  <h6 className="fs-16">{state.mmNickName||state.mmName}</h6>
                  <div className="d-flex justify-content-center">
                    <span className="fs-14 text-center">{state.mmEmail}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Profile */}
            <div className="sidebar-body chat-body">
              {/* Profile Info */}
              <h5 className="mb-2">프로필 정보</h5>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">이름</h6>
                      <p className="fs-16 ">{state.mmName}</p>
                    </div>
                    <span>
                      <i className="ti ti-user-circle fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">닉네임</h6>
                      <p className="fs-16 ">{state.mmNickName}</p>
                    </div>
                    <span>
                      <i className="ti ti-user-circle fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">전화번호</h6>
                      <p className="fs-16">{formattedPhone}</p>
                    </div>
                    <span>
                      <i className="ti ti-phone-check fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list  profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">성별</h6>
                      <p className="fs-16">{state.mmGender === 1 ? "남자" : state.mmGender === 2 ? "여자" : "알 수 없음"}</p>
                    </div>
                    <span>
                      <i className="ti ti-user-star fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">이메일 주소</h6>
                      <p className="fs-16">{state.mmEmail}</p>
                    </div>
                    <span>
                      <i className="ti ti-mail-heart fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">자기소개</h6>
                      <p className="fs-16">{state.mmIntro != null ? state.mmIntro : `안녕 난 ${state.mmNickName || state.mmName}`}</p>
                    </div>
                    <span>
                      <i className="ti ti-user-check fs-16" />
                    </span>
                  </div>
                  {/* <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">지역</h6>
                      <p className="fs-16">Portland, USA</p>
                    </div>
                    <span>
                      <i className="ti ti-map-2 fs-16" />
                    </span>
                  </div> */}
                  <div className="d-flex profile-list justify-content-between align-items-center">
                    <div>
                      <h6 className="fs-14">가입일</h6>
                      <p className="fs-16">{formattedRegDate}</p>
                    </div>
                    <span>
                      <i className="ti ti-calendar-event fs-16" />
                    </span>
                  </div>
                </div>
              </div>
              {/* /Profile Info */}
              {/* Status */}
              <h5 className="mb-2">Status</h5>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">Active Status</h6>
                      <p className="fs-16 ">Show when you’re active</p>
                    </div>
                    <div className="form-check form-switch d-flex justify-content-end align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="d-flex profile-list justify-content-between align-items-center">
                    <div>
                      <h6 className="fs-14">Friends Status</h6>
                      <p className="fs-16 ">Show friends status in chat</p>
                    </div>
                    <div className="form-check form-switch d-flex justify-content-end align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Status */}
              {/* Social Media */}
              <h5 className="mb-2">Social Media</h5>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">Facebook</h6>
                      <p className="fs-16 ">@SalomKatherine</p>
                    </div>
                    <span>
                      <i className="ti ti-brand-facebook fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <div>
                      <h6 className="fs-14">Instagram Linkedin</h6>
                      <p className="fs-16 ">@SalomKatherine</p>
                    </div>
                    <span>
                      <i className="ti ti-brand-instagram fs-16" />
                    </span>
                  </div>
                  <div className="d-flex profile-list justify-content-between align-items-center">
                    <div>
                      <h6 className="fs-14">Linkedin</h6>
                      <p className="fs-16 ">@SalomKatherine</p>
                    </div>
                    <span>
                      <i className="ti ti-brand-linkedin fs-16" />
                    </span>
                  </div>
                </div>
              </div>
              {/* /Social Media */}
              {/* Deactivate */}
              <h5 className="mb-2">Deactivate </h5>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex profile-list justify-content-between align-items-center">
                    <div>
                      <h6 className="fs-14">Deactivate Account</h6>
                      <p className="fs-16 ">Deactivate your Account</p>
                    </div>
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
              {/* /Deactivate */}
              {/* Logout */}
              <h5 className="mb-2">Logout</h5>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex profile-list justify-content-between align-items-center">
                    <div>
                      <h6 className="fs-14">Logout</h6>
                      <p className="fs-16 ">Sign out from this Device</p>
                    </div>
                    <Link to={routes.signin} className="link-icon">
                      <i className="ti ti-logout fs-16" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Logout */}
            </div>
          </div>
          </Scrollbars>
        </div>
        {/* / Profile sidebar */}
    </>
  )
}

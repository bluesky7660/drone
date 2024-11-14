import React, { useState } from 'react'
import { all_routes } from '../router/all_routes';
import ImageWithBasePath from '../../core/common/imageWithBasePath';
import { Link } from 'react-router-dom';
type PasswordField =  'confirmPassword' | 'newpassword';
const ResetPassword = () => {
    const routes = all_routes;
  const [passwordVisibility, setPasswordVisibility] = useState({
    confirmPassword: false,
    newpassword:false
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <div className="container-fuild">
  <div className=" w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap login-bg1 ">
          <div className="col-md-9 mx-auto p-4">
            <form >
              <div>
                <div className=" mx-auto mb-5 text-center">
                  <ImageWithBasePath
                    src="assets/img/full-logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className=" mb-4">
                      <h2 className="mb-2">Set New Password</h2>
                      <p className="mb-0 fs-16">
                        Your new password must be different from previous
                        passwords.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">New Password</label>
                          <div className="input-icon ">
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
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <div className="input-icon ">
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
                      </div>
                    </div>
                    <Link
                      to={routes.success}
                      className="btn btn-primary w-100 justify-content-center"
                    >
                      Reset Password
                    </Link>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="mb-0 text-gray-9">
                    {" "}
                    <i className="ti ti-circle-arrow-left" /> Back to{" "}
                    <Link to={routes.signin} className="link-primary">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <div className="d-lg-flex align-items-center justify-content-center position-relative d-lg-block d-none flex-wrap vh-100 overflowy-auto login-bg2 ">
          <div className="floating-bg">
            <ImageWithBasePath src="assets/img/bg/circle-1.png" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/circle-2.png" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/emoji-01.svg" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/emoji-02.svg" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/emoji-03.svg" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/emoji-04.svg" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/right-arrow-01.svg" alt="Img" />
            <ImageWithBasePath src="assets/img/bg/right-arrow-02.svg" alt="Img" />
          </div>
          <div className="floating-avatar ">
            <span className="avatar avatar-xl avatar-rounded border border-white">
              <ImageWithBasePath src="assets/img/profiles/avatar-12.jpg" alt="img" />
            </span>
            <span className="avatar avatar-xl avatar-rounded border border-white">
              <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
            </span>
            <span className="avatar avatar-xl avatar-rounded border border-white">
              <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
            </span>
            <span className="avatar avatar-xl avatar-rounded border border-white">
              <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
            </span>
          </div>
          <div className="text-center">
            <ImageWithBasePath
              src="assets/img/bg/login-bg-1.png"
              className="login-img"
              alt="Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ResetPassword
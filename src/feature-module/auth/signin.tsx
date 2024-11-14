import React, { useEffect, useState } from 'react'
import ImageWithBasePath from '../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes'

const Signin = () => {
  const routes = all_routes;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  useEffect(() => {
    localStorage.setItem('menuOpened', '')
  }, [])
  
  return (
    <>
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
                          <h2 className="mb-2">Welcome!</h2>
                          <p className="mb-0 fs-16">
                            Sign in to see what you’ve missed.
                          </p>
                        </div>
                        <div className="mb-3 ">
                          <label className="form-label">User Name</label>
                          <div className="input-icon mb-3 position-relative">
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control"
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-user" />
                            </span>
                          </div>
                          <label className="form-label">Password</label>
                          <div className="input-icon ">
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            className="pass-input form-control"
                          />
                          <span
                            className={`ti toggle-password ${
                              isPasswordVisible ? "ti-eye" : "ti-eye-off"
                            }`}
                            onClick={togglePasswordVisibility}
                          ></span>
                          </div>
                        </div>
                        <div className="form-wrap form-wrap-checkbox mb-3">
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md mb-0">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                              />
                            </div>
                            <p className=" mb-0 ">Remember Me</p>
                          </div>
                          <div className="text-end ">
                            <Link
                              to={routes.forgotPassword}
                              className="link-primary"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <div className="mb-4">
                          <Link
                            to={routes.index}
                            className="btn btn-primary w-100 justify-content-center"
                          >
                            Sign In
                          </Link>
                        </div>
                        <div className="login-or mb-3">
                          <span className="span-or">Or sign in with </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="fs-16 btn btn-white btn-shadow d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid me-3"
                                src="assets/img/icons/google.svg"
                                alt="Facebook"
                              />
                              Google
                            </Link>
                          </div>
                          <div className="text-center flex-fill">
                            <Link
                              to="#"
                              className="fs-16 btn btn-white btn-shadow d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid me-3"
                                src="assets/img/icons/facebook.svg"
                                alt="Facebook"
                              />
                              Facebook
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <p className="mb-0 text-gray-9">
                        Don’t have a account?{" "}
                        <Link to={routes.signup} className="link-primary">
                          Sign Up
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
    </>

  )
}

export default Signin
import React, { useState, useContext } from 'react';
import ImageWithBasePath from '../../core/common/imageWithBasePath'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { all_routes } from '../router/all_routes'
import { MemberContext } from '@context/memberContext';
import { firebaseDB, auth } from '../../firebase/firebase'; // Firebase auth 가져오기
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Cookies from 'js-cookie';
import { uid } from 'chart.js/dist/helpers/helpers.core';

const Signin = () => {
  const routes = all_routes;
  const { dispatch } = useContext(MemberContext); // useContext로 상태 가져오기
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('sky7660@gmail.com');
  const [password, setPassword] = useState('123456abc@!');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  // 로그인 처리 함수
  const handleLogin = async () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력하세요.');
      return;
    }

    try {
      // Firebase로 로그인 처리
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 로그인 성공 후 Firestore에서 사용자 데이터 조회
      const userDocRef = doc(firebaseDB, 'member', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        // mmDelNy가 true(삭제된 계정)인 경우 로그인 차단
        if (userData.mmDelNy) {
          alert('탈퇴된 계정입니다.');
          return;
        }
        console.log('사용자 데이터:', userData);
        
        // 로그인 후 받아온 회원 정보 상태에 저장
        const memberData = {
          uid:user.uid,
          mmBirthDate: userData.mmBirthDate,
          mmDelNy: userData.mmDelNy,
          mmEmail: userData.mmEmail,
          mmName: userData.mmName,
          mmNickName: userData.mmNickName,
          mmPassword: userData.mmPassword,
          mmPhoneNum: userData.mmPhoneNum,
          mmRegDate: userData.mmRegDate,
        };
        console.log('memberData 데이터:', memberData);
        dispatch({ type: 'SET_MEMBER', payload: memberData });

        // 쿠키에 로그인 정보 저장
        Cookies.set('user', JSON.stringify(memberData), { expires: 1 / 48, path: '/' });

        // 로그인 성공 시 대시보드로 이동
        navigate(routes.index);
      } else {
        alert('해당하는 계정이 존재하지 않습니다.');
      }
    } catch (error) {
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-fuild">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap login-bg1">
                <div className="col-md-9 mx-auto p-4">
                  <form>
                    <div>
                      <div className="mx-auto mb-5 text-center">
                        <ImageWithBasePath
                          src="assets/img/full-logo.svg"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-4">
                            <h2 className="mb-2">환영합니다!</h2>
                            <p className="mb-0 fs-16">로그인하여 놓친 내용을 확인하세요.</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">유저이름</label>
                            <div className="input-icon mb-3 position-relative">
                              <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-user" />
                              </span>
                            </div>
                            <label className="form-label">패스워드</label>
                            <div className="input-icon">
                              <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pass-input form-control"
                              />
                              <span
                                className={`ti toggle-password ${isPasswordVisible ? 'ti-eye' : 'ti-eye-off'}`}
                                onClick={togglePasswordVisibility}
                              ></span>
                            </div>
                          </div>
                          <div className="form-wrap form-wrap-checkbox mb-3">
                            <div className="d-flex align-items-center">
                              <div className="form-check form-check-md mb-0">
                                <input
                                  id="autoLogin"
                                  className="form-check-input mt-0"
                                  type="checkbox"
                                />
                              </div>
                              <label className="mb-0" htmlFor="autoLogin">자동 로그인</label>
                            </div>
                            <div className="text-end">
                              <Link to={routes.forgotPassword} className="link-primary">
                                패스워드 찾기?
                              </Link>
                            </div>
                          </div>
                          <div className="mb-4">
                            <button
                              type="button"
                              className="btn btn-primary w-100 justify-content-center"
                              onClick={handleLogin}  // 로그인 시 로그인 함수 호출
                            >
                              로그인
                            </button>
                          </div>
                          <div className="login-or mb-3">
                            <span className="span-or">소셜 로그인</span>
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
                                  alt="Google"
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
                          계정이 없으신가요?{' '}
                          <Link to={routes.signup} className="link-primary">
                            회원가입
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="d-lg-flex align-items-center justify-content-center position-relative d-lg-block d-none flex-wrap vh-100 overflowy-auto login-bg2">
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
                <div className="floating-avatar">
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
  );
};

export default Signin;

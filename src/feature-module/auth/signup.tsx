import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { all_routes } from '../router/all_routes';
import { DatePicker } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, MEMBER_COLLECTION, } from '@firebaseApi/firebase';
import { FirebaseError } from 'firebase/app';
import type { DatePickerProps } from 'antd';
import ImageWithBasePath from '../../core/common/imageWithBasePath';

const Signup = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // DatePicker의 onChange 핸들러 수정
  const onChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setBirthDate(date.toDate()); // Dayjs 객체를 Date로 변환해 상태로 설정
    } else {
      setBirthDate(null); // 선택 해제 시 null로 설정
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!email || !password || !username || !nickname || !phone || !birthDate) {
    //   alert('모든 필드를 입력해주세요.');
    //   return;
    // }
    if (!username) {
      alert('유저 이름을 입력해주세요.');
      return;
    }
    if (!nickname) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!phone) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!birthDate) {
      alert('생년월일을 입력해주세요.');
      return;
    }

    if (!agreeTerms) {
      alert('이용 약관에 동의해야 합니다.');
      return;
    }

    try {
      // Firebase 인증: 사용자 생성
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const user = credential.user;

      // Firestore에 사용자 정보 저장
      const userDoc = doc(MEMBER_COLLECTION, user.uid);
      await setDoc(userDoc, {
        mmEmail: email,
        mmPassword: password,
        mmName: username,
        mmNickName: nickname,
        mmPhoneNum: phone,
        mmBirthDate: birthDate,
        mmRegDate: new Date(),
        mmDelNy: false, // 초기값은 false
      });

      alert('회원가입에 성공하셨습니다. 로그인 해주세요.');
      navigate('/signin');
    } catch (error) {
      console.error('회원가입 오류: ', error);

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('이메일을 바르게 입력해주세요.');
            break;
          case 'auth/weak-password':
            alert('비밀번호가 너무 쉬워요.');
            break;
          case 'auth/email-already-in-use':
            alert('등록된 이메일입니다.');
            break;
          default:
            alert('회원가입 실패');
            break;
        }
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
    
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap login-bg1">
              <div className="col-md-9 mx-auto p-4">
                <form onSubmit={onRegister}>
                  <div className="mx-auto mb-5 text-center">
                    <ImageWithBasePath src="assets/img/full-logo.svg" className="img-fluid" alt="Logo" />
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-4">
                        <h2 className="mb-2">회원가입</h2>
                        <p className="mb-0 fs-16">회원 가입하여 친구들과 순간을 공유하세요!</p>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
                            <label className="form-label">유저이름</label>
                            <div className="input-icon mb-3 position-relative">
                              <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-user" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
                            <label className="form-label">닉네임</label>
                            <div className="input-icon mb-3 position-relative">
                              <input
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                className="form-control"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-user" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <div className="input-icon mb-3 position-relative">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-mail" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
                            <label className="form-label">휴대폰 번호</label>
                            <div className="input-icon mb-3 position-relative">
                              <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-phone" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
                            <label className="form-label">생년월일</label>
                            <div className="input-icon antd-pickers position-relative">
                              <DatePicker
                                getPopupContainer={(trigger) => trigger.parentElement || document.body}
                                className="form-control datetimepicker"
                                onChange={onChange}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar-event" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
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
                        </div>
                      </div>
                      <div className="form-wrap form-wrap-checkbox mb-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-md mb-0">
                            <input
                              id="agreeCheckBox"
                              className="form-check-input mt-0"
                              type="checkbox"
                              checked={agreeTerms}
                              onChange={() => setAgreeTerms(!agreeTerms)}
                            />
                          </div>
                          <label className="mb-0" htmlFor="agreeCheckBox">
                            이용 약관과 개인정보 처리 방침에 동의합니다.
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <button type="submit" className="btn btn-primary w-100 justify-content-center">
                          회원가입
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <p className="mb-0 text-gray-9">
                      이미 계정이 있으신가요?{' '}
                      <Link to={routes.signin} className="link-primary">
                        로그인
                      </Link>
                    </p>
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

export default Signup
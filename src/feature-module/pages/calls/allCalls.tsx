import React, {  useContext } from 'react';
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { MemberContext } from '@context/memberContext'
import { Link } from 'react-router-dom'

const AllCalls = () => {
  const { state } = useContext(MemberContext)!;
  const userName = state.mmNickName || state.mmName;
  return (
    <>
  {/* Chat */}
  <div className="welcome-content  align-items-center justify-content-center">
    <div className="welcome-info text-center">
      <div className="welcome-box bg-white d-inline-flex align-items-center">
        <span className="avatar avatar-md me-2">
          <ImageWithBasePath
            src="assets/img/profiles/avatar-16.jpg"
            alt="img"
            className="rounded-circle"
          />
        </span>
        <h6>
          환영합니다! {userName}
          <ImageWithBasePath
            src="assets/img/icons/emoji-01.svg"
            alt="Image"
            className="ms-2"
          />
        </h6>
      </div>
      <p>대화할 사람이나 그룹을 선택하세요.</p>
      <Link
        to="#"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#new-chat"
      >
        <i className="ti ti-location me-2" />
          연락처 초대
      </Link>
    </div>
  </div>
  {/* /Chat */}
</>

  )
}

export default AllCalls
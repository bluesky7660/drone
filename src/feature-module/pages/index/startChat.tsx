import React from 'react'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'

const StartChat = () => {
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
          Welcome! Salom
          <ImageWithBasePath
            src="assets/img/icons/emoji-01.svg"
            alt="Image"
            className="ms-2"
          />
        </h6>
      </div>
      <p>Choose a person or group to start chat with them.</p>
      <Link
        to="#"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#new-chat"
      >
        <i className="ti ti-location me-2" />
        Invite Contacts
      </Link>
    </div>
  </div>
  {/* /Chat */}
</>

  )
}

export default StartChat
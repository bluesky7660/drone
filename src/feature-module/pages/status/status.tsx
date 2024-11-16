import React from 'react'
import UploadFile from '../../../core/modals/upload-file-image'
import NewStatus from '../../../core/modals/new-status'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../feature-module/router/all_routes'

const Status = () => {
  const routes = all_routes;
  return (
    <>
    <>
  {/* Chat */}
  <div className="welcome-content d-flex align-items-center justify-content-center">
    <div className="welcome-info text-center">
      <Link
        to={routes.myStatus}
        className="rounded-border bg-primary text-white d-flex align-items-center justify-content-center fs-22"
      >
        <i className="ti ti-circle-dot " />
      </Link>
      <p className="text-gray-9 status-content mb-0 mt-2">
        연락처를 클릭하여 상태 업데이트를 확인하세요.
      </p>
    </div>
  </div>
  {/* /Chat */}
</>

    <UploadFile/>
    <NewStatus/>
    </>
  )
}

export default Status
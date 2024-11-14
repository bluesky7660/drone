import React from "react";

import { Outlet } from "react-router";
const AuthFeature = () => {
  
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper d-block" style={{ visibility: "visible" }}>
        <Outlet />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default AuthFeature;

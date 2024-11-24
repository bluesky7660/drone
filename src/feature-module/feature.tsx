import React from "react";
import { Outlet } from "react-router";
import {  useSelector } from "react-redux";
import Sidebar from "../core/common/sidebar/sidebar";
import ChatSidebar from "../core/common/sidebar/chatSidebar";
import CommonModals from "../core/modals/common-modals";

const Feature = React.memo(() => {
  const themeDark = useSelector((state: any) => state?.darkMode);
  return (
    <div className={themeDark?'darkmode':'lightmode'}>
      <div className="main-wrapper" style={{ visibility: "visible" }}>
        <div className="content main_content">
          <Sidebar/>
          <ChatSidebar/>
          <Outlet />
        </div>
        <CommonModals/>
      </div>
    </div>
  );
});

export default Feature;

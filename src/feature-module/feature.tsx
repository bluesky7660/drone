import React ,{useEffect, useState} from "react";
import { Outlet, useLocation } from "react-router";
import {  useSelector } from "react-redux";
import Sidebar from "../core/common/sidebar/sidebar";
import ChatSidebar from "../core/common/sidebar/chatSidebar";
import CommonModals from "../core/modals/common-modals";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "@/style/scss/base/_PageTransition.scss";

const Feature = React.memo(() => {
  const location = useLocation();
  const themeDark = useSelector((state: any) => state?.darkMode);
  const [initialLoad, setInitialLoad] = useState(true); // 초기 로드 상태

  useEffect(() => {
    console.log("location.pathname",location.pathname);
    // const timer = setTimeout(() => setInitialLoad(false), 300); // 초기 로드 애니메이션 300ms 후 해제
    // return () => clearTimeout(timer); // 클린업
  }, []);
  return (
    <div className={themeDark?'darkmode':'lightmode'}>
      <div className="main-wrapper" style={{ visibility: "visible" }}>
        <div className="content main_content">
          <Sidebar/>
          <ChatSidebar/>
          {/* <TransitionGroup component={null}>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames={initialLoad ? "slide-initial" : "slide"} // 초기 로드 상태에 따라 클래스 변경
              unmountOnExit
            > */}
              <Outlet />
            {/* </CSSTransition>
          </TransitionGroup> */}
        </div>
        <CommonModals/>
      </div>
    </div>
  );
});

export default Feature;

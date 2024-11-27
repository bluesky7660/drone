import React, { useEffect, useState} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { adminAuth, adminRoutes, authRoutes, publicRoutes } from "./router.link";
import Feature from "../feature";
import AuthFeature from "../authFeature";
import Signin from "../auth/signin";
import { Helmet } from "react-helmet-async";
import AdminFeature from "../adminFeature";
import AdminAuthFeature from "../adminAuthFeature";
import AdminLogin from "../admin/authentication/login";
import PrivateRoute from "@router/PrivateRoute";
import Cookies from "js-cookie";
// import { MemberContext, MemberContextType } from '@context/memberContext';

const Mainapp: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { dispatch } = useContext<MemberContextType>(MemberContext); // MemberContext 타입 지정

  const [styleLoaded, setStyleLoaded] = useState<boolean>(false); // 타입 지정

  useEffect(() => {
    if (styleLoaded) return;
    setStyleLoaded(false); // Reset styleLoaded when pathname changes

    if (location.pathname.includes("/admin")) {
      import("../../style/admin/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Admin style load error: ", err));
    } else {
      import("../../style/scss/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Main style load error: ", err));
    }
  }, [location.pathname, styleLoaded]);

  useEffect(() => {
    const checkSessionTimeout = () => {
      const userCookie = Cookies.get('user'); // js-cookie로 'user' 쿠키 가져오기

      if (!userCookie) return;

      const currentTime = new Date().getTime();
      const userData = JSON.parse(userCookie);
      
      if (userData) {
        const lastActivity = userData.lastActivity || currentTime;
        const sessionTimeout = 24 * 30 * 60 * 1000; // 30분 = 30 * 60 * 1000ms
        
        if (currentTime - lastActivity > sessionTimeout) {
          alert('세션이 만료되었습니다. 다시 로그인하세요.');
          Cookies.remove('user'); // 세션 만료 시 쿠키 삭제
          navigate('/signin'); // 로그인 페이지로 이동
        }
      }
    };

    const interval = setInterval(checkSessionTimeout, 5 * 60 * 1000); // 5분마다 세션 체크

    return () => clearInterval(interval); // 클린업 함수
  }, [navigate]);

  const currentRoute = publicRoutes.find(route => route.path === location.pathname) || 
                       authRoutes.find(route => route.path === location.pathname);
                       
  const fullTitle = currentRoute?.title ? `${currentRoute.title} - DreamsChat` : "DreamsChat";
  
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  if (!styleLoaded) {
    return null; // 스타일 로딩 중에는 아무것도 렌더링하지 않음
  }

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route element={<PrivateRoute element={<Feature />} />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<AdminFeature />}>
          {adminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<AdminAuthFeature />}>
          {adminAuth.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
          <Route path="/admin/" element={<AdminLogin />} />
        </Route>
      </Routes>
    </>
  );
};

export default Mainapp;

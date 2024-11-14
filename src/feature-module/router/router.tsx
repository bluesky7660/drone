import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { adminAuth, adminRoutes, authRoutes, publicRoutes } from "./router.link";
import Feature from "../feature";
import AuthFeature from "../authFeature";
import Signin from "../auth/signin";
import { Helmet } from "react-helmet-async";
import AdminFeature from "../adminFeature";
import AdminAuthFeature from "../adminAuthFeature";
import AdminLogin from "../admin/authentication/login";

const Mainapp: React.FC = () => {
  const location = useLocation();

  // Find the current route in either public or auth routes
  const currentRoute = publicRoutes.find(route => route.path === location.pathname) || 
                       authRoutes.find(route => route.path === location.pathname);

  // Construct the full title
  const fullTitle = currentRoute?.title 
    ? `${currentRoute.title} - DreamsChat`
    : "DreamsChat";

  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  const [styleLoaded, setStyleLoaded] = useState(false);

  useEffect(() => {
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
  }, [location.pathname]);
  if (!styleLoaded) {
    return null; // You could show a loading spinner here if necessary
  }
  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route element={<Feature />}>
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
        <Route  element={<AdminAuthFeature />}>
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

import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import Cookies from 'js-cookie';
import { all_routes } from '../router/all_routes';

type PrivateRouteProps = RouteProps & {
  element: React.ReactNode;
};

const PrivateRoute = React.memo(({ element, ...rest }: PrivateRouteProps) => {
  // 쿠키에서 'user'라는 이름으로 저장된 데이터를 가져옴
  const user = Cookies.get('user'); 

  // 쿠키가 없거나 만료된 경우 로그인 페이지로 리디렉션
  if (!user) {
    return <Navigate to={all_routes.signin} />;
  }

  // 쿠키가 존재하면 해당 element를 렌더링
  return <>{element}</>;
});

export default PrivateRoute;

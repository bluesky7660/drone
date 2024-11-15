import React, { useContext, useEffect } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { all_routes } from '../router/all_routes';
import { MemberContext } from '@context/memberContext';

type PrivateRouteProps = RouteProps & {
  element: React.ReactNode;
};

const PrivateRoute = ({ element, ...rest }: PrivateRouteProps) => {
  const { state } = useContext(MemberContext)!; // 로그인된 상태 가져오기
  const routes = all_routes;
  
  useEffect(() => {
    console.log("state?.mmEmail:", state?.mmEmail);
  }, [state]);

  // 인증 상태에 따라 로그인 페이지로 리디렉션 또는 컴포넌트 렌더링
  if (!state?.mmEmail) {
    return <Navigate to={routes.signin} />;
  }

  return <>{element}</>; // 로그인 상태일 경우 해당 element 렌더링
};

export default PrivateRoute;

import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import Cookies from 'js-cookie';

// 상태 인터페이스
interface Member {
  uid: string;
  mmBirthDate: string;  // 생년월일
  mmDelNy: boolean;     // 삭제 여부
  mmEmail: string;      // 이메일
  mmName: string;       // 이름
  mmGender: number;
  mmNickName: string;   // 닉네임
  mmPassword: string;   // 비밀번호
  mmPhoneNum: string;   // 전화번호
  mmRegDate: Timestamp | null;    // 등록일
}

// 리듀서에서 처리할 액션 타입 정의
type MemberAction =
  | { type: 'SET_MEMBER'; payload: Member }
  | { type: 'LOGOUT' };

// 초기 상태
const initialState: Member = {
  uid: '',
  mmBirthDate: '',
  mmDelNy: false,
  mmEmail: '',
  mmName: '',
  mmGender:0,
  mmNickName: '',
  mmPassword: '',
  mmPhoneNum: '',
  mmRegDate: null,
};

// 리듀서 함수
const memberReducer = (state: Member, action: MemberAction): Member => {
  switch (action.type) {
    case 'SET_MEMBER':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return initialState; // 로그아웃 시 초기 상태로 리셋
    default:
      return state;
  }
};

interface MemberContextType {
  state: Member;
  dispatch: React.Dispatch<MemberAction>;
}

// Context 생성
const MemberContext = createContext<{
  state: Member;
  dispatch: React.Dispatch<MemberAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Context Provider 컴포넌트
interface MemberProviderProps {
  children: ReactNode;
}

const MemberProvider: React.FC<MemberProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initialState);

  useEffect(() => {
    const userData = Cookies.get('user');
    if (userData) {
      dispatch({ type: 'SET_MEMBER', payload: JSON.parse(userData) });
    }

    // 30분 동안 아무 활동이 없으면 로그아웃 처리
    const timeout = setTimeout(() => {
      Cookies.remove('user');
      dispatch({ type: 'LOGOUT' });
    }, 30 * 60 * 1000); // 30분

    return () => clearTimeout(timeout);
  }, []);

  return (
    <MemberContext.Provider value={{ state, dispatch }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, MemberContext, MemberContextType };
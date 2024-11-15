import React, { createContext, useReducer, ReactNode } from 'react';

// 상태 인터페이스
interface Member {
  mmBirthDate: string;  // 생년월일
  mmDelNy: boolean;     // 삭제 여부
  mmEmail: string;      // 이메일
  mmName: string;       // 이름
  mmNickName: string;   // 닉네임
  mmPassword: string;   // 비밀번호
  mmPhoneNum: string;   // 전화번호
  mmRegDate: string;    // 등록일
}

// 리듀서에서 처리할 액션 타입 정의
type MemberAction =
  | { type: 'SET_MEMBER'; payload: Member }
  | { type: 'LOGOUT' };

// 초기 상태
const initialState: Member = {
  mmBirthDate: '',
  mmDelNy: false,
  mmEmail: '',
  mmName: '',
  mmNickName: '',
  mmPassword: '',
  mmPhoneNum: '',
  mmRegDate: '',
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

  return (
    <MemberContext.Provider value={{ state, dispatch }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, MemberContext };
import { useContext } from 'react';
import { Timestamp } from 'firebase/firestore';
import { MemberContext } from '@context/memberContext';

export const useMember = () => {
  const { state } = useContext(MemberContext)!;
  const userName = state.mmNickName || state.mmName;
  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  const formattedPhone = formatPhoneNumber(state.mmPhoneNum);

  const formatRegDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate(); 
    return date.toLocaleString(); 
  };

  const formattedRegDate = state.mmRegDate ? formatRegDate(state.mmRegDate) : '등록일 없음';
  return { state, userName, formattedPhone, formattedRegDate };
};

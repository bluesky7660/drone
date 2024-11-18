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

  const formatRegDate = (regDate: Timestamp | Date | null) => {
    if (regDate instanceof Timestamp) {
      return regDate.toDate().toLocaleString();
    }
    if (regDate instanceof Date) {
      return regDate.toLocaleString();
    }
    return '등록일 없음';
  };

  const formattedRegDate = formatRegDate(state.mmRegDate);

  return { state, userName, formattedPhone, formattedRegDate };
};

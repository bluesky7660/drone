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
      return regDate.toDate().toLocaleString(); // Timestamp 객체일 경우 Date로 변환 후 포맷
    }
    if (regDate instanceof Date) {
      return regDate.toLocaleString(); // 이미 Date 객체일 경우 바로 포맷
    }
    return '등록일 없음'; // mmRegDate가 null인 경우 처리
  };

  const formattedRegDate = formatRegDate(state.mmRegDate);

  return { state, userName, formattedPhone, formattedRegDate };
};

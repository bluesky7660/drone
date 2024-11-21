import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@firebaseApi/firebase'; 

const useAuth = () => {
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);  // 현재 로그인된 유저 UID
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User UID:', user.uid); // 현재 로그인한 유저 UID 확인
            setCurrentUserId(user.uid);
        } else {
            console.log('No user is logged in');
        }
    });

    return () => unsubscribe();
  }, []);
  return {currentUserId,setCurrentUserId};
};

export default useAuth;
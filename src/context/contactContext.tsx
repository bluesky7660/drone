import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { firebaseDB } from '@firebaseApi/firebase'; // Firestore 인스턴스 가져오기
import { Member } from '@context/memberContext';

type ContactContextType = {
    selectedContact: Member | null;
    setSelectedContact: (uid: string | null) => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedContact, setSelectedContact] = useState<Member | null>(null);
    const [selectedUid, setSelectedUid] = useState<string | null>(null);

    // 특정 uid에 대해 Firebase에서 Member 정보를 가져오는 함수
    const fetchMemberData = async (uid: string) => {
        try {
            const memberDocRef = doc(firebaseDB, 'member', uid); // member 컬렉션에서 문서 참조 생성
            const memberSnapshot = await getDoc(memberDocRef);
            if (memberSnapshot.exists()) {
                const memberData = memberSnapshot.data();
                if (memberData) {
                    return {
                        uid: memberSnapshot.id,
                        mmBirthDate: memberData.mmBirthDate,
                        mmDelNy: memberData.mmDelNy,
                        mmEmail: memberData.mmEmail,
                        mmName: memberData.mmName,
                        mmGender: memberData.mmGender,
                        mmNickName: memberData.mmNickName,
                        mmPassword: memberData.mmPassword,
                        mmPhoneNum: memberData.mmPhoneNum,
                        mmRegDate: memberData.mmRegDate || null,
                    } as Member;
                }
            }
            return null;
        } catch (error) {
            console.error("Failed to fetch member data:", error);
            return null;
        }
    };

    // selectedUid가 변경될 때마다 실행되어 selectedContact 상태 업데이트
    useEffect(() => {
        if (selectedUid) {
            fetchMemberData(selectedUid).then((member) => {
                setSelectedContact(member);
            });
        } else {
            setSelectedContact(null);
        }
    }, [selectedUid]);

    // setSelectedContact 함수는 uid만 받음
    const handleSetSelectedContact = (uid: string | null) => {
        setSelectedUid(uid);
    };

    return (
        <ContactContext.Provider value={{ selectedContact, setSelectedContact: handleSetSelectedContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = (): ContactContextType => {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};

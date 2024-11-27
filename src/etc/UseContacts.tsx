import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { firebaseDB } from '@firebaseApi/firebase';

type Contact = {
    uid: string;
    name: string;
    email: string;
    lastSeen: string;
    avatar: string;
};
type GroupedContacts = {
    [letter: string]: Contact[];
};

const AllContacts = (currentUserId: string | null) => {
    const [contacts, setContacts] = useState<any[]>([]);
    useEffect(() => {
        const fetchContacts = async () => {
            const contactsSnapshot = await getDocs(collection(firebaseDB, 'member'));
            const contactsList = contactsSnapshot.docs.map((doc) => ({
                uid: doc.id,  // Firebase 문서의 ID를 uid로 사용
                ...doc.data(),  // 문서의 데이터를 포함
            }));
            console.log('Fetched Contacts:', contactsList);  // 유저 목록 확인
        
            setContacts(contactsList);
        };

        if (currentUserId) {
        fetchContacts();
        }
    }, [currentUserId]);
    return contacts;
};
const SavedContacts = (currentUserId: string | null) => {
    const [savedcontacts, setsavedContacts] = useState<any[]>([]);
    // const [groupedSavedContacts, setGroupedSavedContacts] = useState<any>({});

    useEffect(() => {
        if (!currentUserId) return;
        const fetchContacts = async () => {
            try {
                const contactsRef = collection(firebaseDB, `member/${currentUserId}/contacts`);
                const snapshot = await getDocs(contactsRef);
                const contactsList = await Promise.all(snapshot.docs.map(async (docSnapshot) => {
                    const contactId = docSnapshot.id;
                    const contactDocRef = doc(firebaseDB, 'member', contactId);  // 문서 참조 생성
                    const contactSnapshot = await getDoc(contactDocRef); 
                    const contactData = contactSnapshot.data();

                    return {
                        uid: contactId,
                        name: contactData?.mmNickName||contactData?.mmName,
                        email:contactData?.mmEmail,
                        lastSeen: contactData?.lastSeen || 'Unknown',
                        avatar: contactData?.avatarUrl || 'assets/img/profiles/avatar-01.jpg', 
                        ...contactData,
                    };
                }));
                console.log('Fetched Contacts:', contactsList);  // 유저 목록 확인
                setsavedContacts(contactsList);
            } catch (error) {
                console.error("연락처 가져오기 실패:", error);
            }
        };

        fetchContacts();
    }, [currentUserId]);
    return savedcontacts;
};
const SavedGroupContacts = (currentUserId: string | null) => {
    const [groupedSavedContacts, setGroupedSavedContacts] = useState<any>({});

    useEffect(() => {
        if (!currentUserId) return;
        const fetchContacts = async () => {
            try {
                const contactsRef = collection(firebaseDB, `member/${currentUserId}/contacts`);
                const snapshot = await getDocs(contactsRef);
                const contactsList = await Promise.all(snapshot.docs.map(async (docSnapshot) => {
                    const contactId = docSnapshot.id;
                    const contactDocRef = doc(firebaseDB, 'member', contactId);  // 문서 참조 생성
                    const contactSnapshot = await getDoc(contactDocRef); 
                    const contactData = contactSnapshot.data();

                    return {
                        uid: contactId,
                        name: contactData?.mmNickName||contactData?.mmName,
                        email:contactData?.mmEmail,
                        lastSeen: contactData?.lastSeen || 'Unknown',
                        avatar: contactData?.avatarUrl || 'assets/img/profiles/avatar-01.jpg', 
                        ...contactData,
                    };
                }));
                console.log('Fetched Contacts:', contactsList);  // 유저 목록 확인
                
                const groupedContacts: GroupedContacts = contactsList.reduce((acc, contact) => {
                    const firstLetter = contact.name.charAt(0).toUpperCase();
                    if (!acc[firstLetter]) {
                      acc[firstLetter] = [];
                    }
                    acc[firstLetter].push(contact);
                    return acc;
                }, {} as GroupedContacts);
                setGroupedSavedContacts(groupedContacts);
            } catch (error) {
                console.error("연락처 가져오기 실패:", error);
            }
        };

        fetchContacts();
    }, [currentUserId]);
    return groupedSavedContacts;
};


export {AllContacts,SavedContacts,SavedGroupContacts};
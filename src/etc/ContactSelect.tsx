import React, { useState} from 'react';

const ContactSelects = () => {
    const [selectedContacts, setSelectedContacts] = useState<string[]>([]); 
    const handleContactSelects = (uid: string) => {
        setSelectedContacts((prevSelected) => {
            if (prevSelected.includes(uid)) {
                return prevSelected.filter((id) => id !== uid);
            } else {
                return [...prevSelected, uid];
            }
        });
    };
    const clearSelectedContacts = () => {
        console.log("선택해제");
        setSelectedContacts([]); // 연락처 목록 초기화
    };
    return { selectedContacts, handleContactSelects ,clearSelectedContacts};
}

const ContactSelect = () => {
    const [selectedContact, setSelectedContact] = useState<string | null>(null);
    const handleContactSelect = (uid: string) => {
        if (selectedContact === uid) {
            setSelectedContact(null); 
        } else {
            setSelectedContact(uid);
        }
    };
    const clearSelectedContact = () => {
        console.log("선택해제");
        setSelectedContact(null); // 연락처 목록 초기화
    };
    return { selectedContact, handleContactSelect,clearSelectedContact};
}

export {ContactSelects, ContactSelect};
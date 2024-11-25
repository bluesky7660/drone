import React, { createContext, useReducer, ReactNode, useEffect } from 'react';

interface ChatMemberContextProps {
    oneToOneMember: { 
        id: string; 
        name: string;
         status: string
    } | null;

    groupMembers: Array<{ 
        id: string;
        name: string;
        role: string
    }>;

    setOneToOneMember: (member: { 
        id: string;
        name: string;
        status: string
    } | null) => void;

    setGroupMembers: (members: Array<{ 
        id: string;
        name: string;
        role: string
    }>) => void;
}

const ChatMemberContext = createContext<ChatMemberContextProps | undefined>(undefined);

export {};
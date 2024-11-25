import React, { createContext, ReactNode, useContext,useState } from 'react';
import {Member} from '@context/memberContext';

interface OneToOneMemberContextProps {
    member: Member| null;
    setMember: (member: Member | null) => void;
}

const OneToOneMemberContext = createContext<OneToOneMemberContextProps | undefined>(undefined);

const OneToOneMemberProvider = ({ children }: { children: ReactNode }) => {
    const [member, setMember] = useState<OneToOneMemberContextProps['member']>(null);
  
    return (
        <OneToOneMemberContext.Provider value={{ member, setMember }}>
            {children}
        </OneToOneMemberContext.Provider>
    );
};
const useOneToOneMemberContext = () => {
    const context = useContext(OneToOneMemberContext);
    if (!context) {
      throw new Error('useOneToOneMemberContext must be used within a OneToOneMemberProvider');
    }
    return context;
};
export {OneToOneMemberProvider,useOneToOneMemberContext};
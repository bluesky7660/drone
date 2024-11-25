import React, { createContext, ReactNode, useContext,useState } from 'react';
import {Member} from '@context/memberContext';

interface GroupMemberContextProps {
    members: Member[];
    setMembers: (members: Member[]) => void;
}

const GroupMemberContext = createContext<GroupMemberContextProps | undefined>(undefined)

const GroupMemberProvider = ({ children }: { children: ReactNode }) => {
    const [members, setMembers] = useState<GroupMemberContextProps['members']>([]);
  
    return (
      <GroupMemberContext.Provider value={{ members, setMembers }}>
        {children}
      </GroupMemberContext.Provider>
    );
  };
const useGroupMemberContext = () => {
    const context = useContext(GroupMemberContext);
    if (!context) {
      throw new Error('useGroupMemberContext must be used within a GroupMemberProvider');
    }
    return context;
};
export {GroupMemberProvider,useGroupMemberContext};
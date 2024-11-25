import React, { ReactNode } from 'react';
import { OneToOneMemberProvider } from '@context/oneToOneMemberContext';
import { MemberProvider } from '@context/memberContext';
import { GroupMemberProvider } from '@context/groupMemberContext';

interface CombinedProviderProps {
    children: ReactNode;
}
const CombinedProvider = ({ children }: CombinedProviderProps) => {
    return (
        <MemberProvider>
            <OneToOneMemberProvider>
                <GroupMemberProvider>
                    {children}
                </GroupMemberProvider>
            </OneToOneMemberProvider>
        </MemberProvider>
    )
}
export default CombinedProvider;
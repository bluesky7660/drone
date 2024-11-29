import React, { ReactNode } from 'react';
import { OneToOneMemberProvider } from '@context/oneToOneMemberContext';
import { MemberProvider } from '@context/memberContext';
import { GroupMemberProvider } from '@context/groupMemberContext';
import { ContactProvider } from '@context/contactContext';

interface CombinedProviderProps {
    children: ReactNode;
}
const CombinedProvider = ({ children }: CombinedProviderProps) => {
    return (
        <MemberProvider>
            <ContactProvider>
            <OneToOneMemberProvider>
                <GroupMemberProvider>
                    {children}
                </GroupMemberProvider>
            </OneToOneMemberProvider>
            </ContactProvider>
        </MemberProvider>
    )
}
export default CombinedProvider;
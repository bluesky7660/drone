import React, { ReactNode } from 'react';
import { OneToOneMemberProvider } from '@context/oneToOneMemberContext';
import { MemberProvider } from '@context/memberContext';
import { GroupMemberProvider } from '@context/groupMemberContext';
import { ContactProvider } from '@context/contactContext';
import { DailyProvider } from '@context/dailyContext';

interface CombinedProviderProps {
    children: ReactNode;
}
const CombinedProvider = ({ children }: CombinedProviderProps) => {
    return (
        <MemberProvider>
            <ContactProvider>
            <OneToOneMemberProvider>
                <DailyProvider>
                <GroupMemberProvider>
                    {children}
                </GroupMemberProvider>
                </DailyProvider>
            </OneToOneMemberProvider>
            </ContactProvider>
        </MemberProvider>
    )
}
export default CombinedProvider;
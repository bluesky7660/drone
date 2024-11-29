import React from 'react'
import NewChat from './newChat'
import DeleteAccount from './delete-account'
import DeleteChat from './delete-chat'
import VideoCall from './video-call'
import VideoGroup from './video-group'
import StartVideoCall from './start-video-call'
import VoiceAttend from './voice-attend'
import VoiceCall from './voice-call'
import VoiceGroup from './voice-group'
import NewGroup from './new-group'
import AddContact from './add-contact'
import MuteUser from './mute-user'
import BlockUser from './block-user'
import ContactDetails from './contact-details'
import EditContact from './edit-contact'
import InviteModal from './invite-modal'
import MuteNotification from './mute-notification'
import { useContact } from '@context/contactContext';

const CommonModals = () => {
  const { selectedContact, setSelectedContact } = useContact();
  return (
    <>
    <NewChat/>
    <NewGroup/>
    <DeleteChat/>
    <DeleteAccount/>
    <VideoCall/>
    <VideoGroup/>
    <StartVideoCall selectedContact={selectedContact} />
    <VoiceAttend/>
    <VoiceCall/>
    <VoiceGroup/>
    <AddContact/>
    <MuteUser/>
    <BlockUser/>
    <ContactDetails/>
    <EditContact/>
    <InviteModal/>
    <MuteNotification/>
    </>
  )
}

export default CommonModals
import React from 'react';

interface Message {
  createdAt: any;  // Firestore Timestamp
  senderId: string;
  text: string;
  isRead: boolean;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <span>{message.senderId}: </span>
          <span>{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

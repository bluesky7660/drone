import React, { useState, useEffect } from "react";
import { firebaseDB } from "../firebase/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

const OneToOneChat = ({ roomName, currentChannel }: { roomName: string; currentChannel: string }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(firebaseDB, "chatRooms", currentChannel, "messages"),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [currentChannel]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    await addDoc(collection(firebaseDB, "chatRooms", currentChannel, "messages"), {
      text: newMessage,
      timestamp: serverTimestamp(),
      user: "User1", // 실제 사용자 이름 또는 ID
    });

    setNewMessage("");
  };

  return (
    <div className="chat-room one-to-one">
      <h4>{roomName}</h4>
      <ul className="chat-messages">
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.user}:</strong>
            <p>{msg.text}</p>
            <small>{msg.timestamp?.toDate().toLocaleString()}</small>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메세지 입력"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default OneToOneChat;

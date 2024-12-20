import React, { useRef, useEffect, useState } from "react";
import Scrollbars from 'react-custom-scrollbars-2'
import { Link } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import copy from "clipboard-copy";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

interface Message {
  id: string;
  senderId: string;
  senderName: string | null;
  text: string;
  createdAt: Timestamp; // 메시지 생성 시간
  isRead: boolean;
  isOpenAI:boolean;
}

interface MessageListProps {
  messages: Message[];
  toggleEmoji: (index: number) => void;
  showEmoji: boolean[];
  currentUserId: string; // 현재 로그인한 사용자의 ID
}

interface RenderMessageProps {
    message: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, toggleEmoji, showEmoji, currentUserId }) => {
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const [isCopied, setIsCopied] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [isSend, setIsSend] = useState(false);
    useEffect(() => {
        if(isFirstRender && endOfMessagesRef.current){
            endOfMessagesRef.current.scrollIntoView({ behavior: "auto" });
            setIsFirstRender(false);
        }else if(endOfMessagesRef.current){
            if (endOfMessagesRef.current && isSend) {
                endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
            }else if(isSend==false){
                endOfMessagesRef.current.scrollIntoView({ behavior: "auto" });
            }
        }
        
    }, [messages]);

    const handleCopy = (index:number) => {
 
          const textToCopy = textRefs.current[index]?.innerText || textRefs.current[index]?.textContent || "";
        if (textToCopy) {
          copy(textToCopy);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000); 
        }
    };
    const RenderMessage = React.memo(({ message }: RenderMessageProps) => {
        return (
            <React.Fragment>
                {message.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    });

    return (
        <Scrollbars
        className="chat-scrollbars"
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight={false}
        autoHeightMin={0}
        autoHeightMax="88vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded
        >
        <div className="chat-body chat-page-group">
            <div className="messages">
            {messages.map((message,index) => (
                <div
                key={message.id|| index}
                className={`chats ${message.senderId === currentUserId ? 'chats-right' : ''}`}
                >
                    <div className="chat-avatar">
                        <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="image"
                        />
                    </div>
                    <div className="chat-content">
                        <div className="chat-profile-name">
                            <h6>
                                {message.isOpenAI === true ? `${message.senderName} (AI)`: message.senderName}
                                <i className="ti ti-circle-filled fs-7 mx-2" />
                                <span className={`msg-read ${message.isRead ? 'success' : ''}`}>
                                <i className="ti ti-checks" />
                                </span>
                            </h6>
                        </div>
                        <div className="chat-info">
                            <div className="message-content">
                                <p className="mb-0" ref={(el) => textRefs.current[index] = el}>
                                    <RenderMessage message={message.text} />
                                </p>
                                <div className="emoj-group">
                                    <ul>
                                        <li className="emoj-action">
                                            <Link to="#" onClick={() => toggleEmoji(1)}>
                                                <i className="ti ti-mood-smile" />
                                            </Link>
                                            <div
                                                className="emoj-group-list"
                                                onClick={() => toggleEmoji(1)}
                                                style={{ display: showEmoji[1] ? 'block' : 'none' }}
                                            >
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-02.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-05.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-06.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-07.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-08.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-03.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-10.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/emonji-09.svg"
                                                            alt="Icon"
                                                        />
                                                        </Link>
                                                    </li>
                                                    <li className="add-emoj">
                                                        <Link to="#">
                                                        <i className="ti ti-plus" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#forward-message">
                                                <i className="ti ti-arrow-forward-up" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chat-actions">
                                <Link className="#" to="#" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                        <Link className="dropdown-item" to="#" onClick={() => handleCopy(index)}>
                                            <i className="ti ti-file-export me-2" />
                                            메시지 복사
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            <i className="ti ti-edit me-2" />
                                            메시지 수정
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#message-delete"
                                        >
                                            <i className="ti ti-trash me-2" />
                                            메시지 삭제
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="chat-time-area">
                            <span className="chat-time">{message.createdAt.toDate().toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div ref={endOfMessagesRef} />
        </div>
        </Scrollbars>
    );
};

export default MessageList;

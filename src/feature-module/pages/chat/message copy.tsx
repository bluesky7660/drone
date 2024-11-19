import React from "react";
import PropTypes from "prop-types";
// import { formatRelative } from "date-fns";
import { imageUrl, useCurrentUser, timeFormat } from "@lib/frontend";
// import Image from "next/image";

const Message = ({
  createdAt = null,
  uid = "",
  text = "",
  photoURL = "",
  isRead = false,
}) => {
  const { currentUser } = useCurrentUser();
  // 채팅 내용 없으면 보여주지 않음
  if (!(text)) return null;

  return (
    <>
      <div
        className={`flex items-start flex-wrap p-4 ${
          uid === currentUser?.id && "flex-row-reverse"
        }`}
      >
        {currentUser?.id !== uid && (
          <>
            {/*  상대방 프로필 사진 */}
            <div className={`w-10 ${uid === currentUser.id ? "" : "mr-2"}`}>
              {" "}
              <img
                src={photoURL ? imageUrl(photoURL) : "/gray.png"}
                alt="Avatar"
                className="rounded-full mr-4 h-10 w-10"
                width={45}
                height={45}
              />
            </div>
          </>
        )}
        {/* 채팅 내용. 사용자 별로 색깔 구분 */}
        <div
          className={`p-2 rounded-lg  ${
            uid === currentUser.id ? "bg-red-400 text-white " : "bg-gray-100"
          }`}
        >
         {text}
        </div>
        <div className="text-gray-400 text-xs mx-2 flex flex-col">
          {createdAt?.seconds ? (
            <span
              className={`text-gray-500 text-xs ${
                uid === currentUser?.id && "flex-row-reverse"
              }`}
            >
            {/* 읽음 & 안읽음 표시, 시간 표 */}
              {isRead === false && uid === currentUser.id && (
                <div className="text-right text-xs text-red-400">1</div>
              )}
              {timeFormat(new Date(createdAt.seconds * 1000))}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;
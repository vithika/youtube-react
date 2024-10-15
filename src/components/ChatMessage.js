import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-10"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt="user"
      ></img>
      <span className="font-bold px-4">{name}</span>
      <span className="font-light">{message}</span>
    </div>
  );
};

export default ChatMessage;

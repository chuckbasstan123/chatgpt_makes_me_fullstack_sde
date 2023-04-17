import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message, isUser }) => {
  const messageClass = isUser ? 'user-message' : 'chatbot-message';
  return (
    <div className={`chat-message ${messageClass}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;

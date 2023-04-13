import React from 'react';
import './Message.css';

const Message = ({ sender, text }) => {
  const messageClass = sender === 'user' ? 'message-user' : 'message-chatbot';

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;

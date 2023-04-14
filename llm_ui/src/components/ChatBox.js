import React from 'react';
import Message from './Message';
import './ChatBox.css';

const ChatBox = ({ messages }) => {
  return (
    <div className="chatbox">
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          text={message.text || 'No message'}
          className={message.sender === 'user' ? 'user-message' : ''}
        />
      ))}
    </div>
  );
};

export default ChatBox;

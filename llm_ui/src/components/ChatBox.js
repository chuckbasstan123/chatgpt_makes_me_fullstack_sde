import React from 'react';
import Message from './Message';
import './ChatBox.css';

const ChatBox = ({ messages }) => {
  return (
    <div className="chatbox">
      {messages.map((message, index) => (
        // <Message key={index} sender={message.sender} text={message.text} />
        <Message
          key={index}
          sender={message.sender}
          text={message.text || 'No message'}
        />
      ))}
    </div>
  );
};

export default ChatBox;

import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;

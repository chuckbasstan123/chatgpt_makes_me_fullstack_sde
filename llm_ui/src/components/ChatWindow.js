import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, isUser) => {
    setMessages((prevMessages) => [...prevMessages, { message, isUser }]);
  };

  const handleSendMessage = async (message) => {
    addMessage(message, true);
    const response = await callChatGPTApi(message);
    addMessage(response, false);
  };

  const callChatGPTApi = async (message) => {
    // Replace with your actual API key and endpoint
    const endpoint = 'http://34.75.228.61:5000/chatgpt/query';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + process.env.GCLOUD_BEARER_API_KEY,
        },
        body: JSON.stringify({
          prompt: message,
        }),
      });

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      return 'Error: Unable to get a response from the chatbot.';
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((msg) => (
          <ChatMessage message={msg.message} isUser={msg.isUser} />
        ))}
      </div>
      <ChatInput onSubmitMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;

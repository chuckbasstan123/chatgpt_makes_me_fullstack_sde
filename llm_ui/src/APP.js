import React, { useState, useEffect } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import UserInput from './components/UserInput';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]); // Add state for user messages
  const [isChatting, setIsChatting] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async (message) => {
    setMessages([...messages, message]);

    // Create a new blob for each message
    const blob = new Blob([message.text], { type: 'text/plain' });

    // Save the blob URL to the message object
    message.blobUrl = URL.createObjectURL(blob);

    if (message.sender === 'user') {
      setUserMessages([...userMessages, message]);
    }
  };

  const handleUserMessage = async (text) => {
    setUserMessages([...userMessages, { text: text, sender: 'user' }]);
    setIsChatting(true);
    setInputValue(text);

    const postData = {
      prompt: text,
    };

    try {
      const response = await fetch('http://34.75.228.61:5000/chatgpt/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + process.env.GCLOUD_BEARER_API_KEY,
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      await sendMessage({ text: data.response, sender: 'chatbot' });
    } catch (error) {
      console.error(error);
    }

    setIsChatting(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LLM Chatbot 1.0</h1>
      </header>

      <ChatBox messages={messages} />
      <ChatBox messages={userMessages} />
      {!isChatting && (
        <UserInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onSubmit={handleUserMessage}
        />
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import UserInput from './components/UserInput';

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    setMessages([...messages, message]);
  };

  const handleUserMessage = async (text) => {
    // Add the user's message to the state
    await sendMessage({ text: 'none sense', sender: 'user' });

    // Uncomment and update the API call to the ChatGPT API
    const postData = {
      prompt: text,
    };

    // try {
    const response = await fetch('http://34.75.228.61:5000/chatgpt/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + 'AIzaSyCIPbT0szCLc5kX_TmC3zjKWoptK8WkSZY',
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    await sendMessage({ text: data.response, sender: 'chatbot' });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Chatbot UI LLM </h1>
      </header>

      <ChatBox messages={messages} />
      <UserInput onSubmit={handleUserMessage} />
    </div>
  );
};

export default App;

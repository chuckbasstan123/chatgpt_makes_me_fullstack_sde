import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import UserInput from './components/UserInput';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (text) => {
    setMessages([
      ...messages,
      { sender: 'user', text: 'hello, I am your personal life coach.' },
    ]);
    // Implement chatbot logic or API call here, and update messages with the chatbot's response
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

// import React from 'react';
// import './App.css';
// // import Chatbot from './components/Chatbot';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Simple Chatbot UI</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

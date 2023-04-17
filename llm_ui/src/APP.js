// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route path="/chat" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
};

export default App;

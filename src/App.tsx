import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<AuthPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

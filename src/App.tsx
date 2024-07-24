import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinVideo from './pages/JoinVideo';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JoinVideoPro from './pages/JoinVideoPro';


const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-video" element={<JoinVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/join-video-pro" element={<JoinVideoPro />} />
      </Routes>
    </div>
  );
};

export default App;

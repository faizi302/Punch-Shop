// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Market from './pages/Market';
import Login from './pages/Login';
import SupportHeader from './pages/SupportHeader';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/support" element={<SupportHeader />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
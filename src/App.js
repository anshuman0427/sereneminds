import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaunchingSoonPage from './components/LaunchingSoonPage';
import PrivacyPolicy from './components/PrivacyPolicy'; // New import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchingSoonPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
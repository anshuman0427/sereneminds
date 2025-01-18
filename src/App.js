import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaunchingSoonPage from './components/LaunchingSoonPage';
import PrivacyPolicy from './components/PrivacyPolicy'; // New import
import ShippingPolicy from './components/ShippingPolicy';
import RefundandCancellation from './components/RefundandCancellation';
import TermsandConditions from './components/TermsandConditions';
import ContactUS from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchingSoonPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Contact-Us" element={<ContactUS />} />
        <Route path="/Shipping-policy" element={<ShippingPolicy />} />
        <Route path="/Refund-and-cancellation" element={<RefundandCancellation />} />
        <Route path="/Terms-and-conditions" element={<TermsandConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
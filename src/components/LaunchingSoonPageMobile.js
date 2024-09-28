'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { FaUserPlus, FaClipboardCheck, FaCalendarAlt, FaCreditCard, FaFileAlt, FaShareSquare, FaClinicMedical, FaGlobe, FaPaperPlane } from 'react-icons/fa';
import { Analytics } from '@vercel/analytics/react';

// Timer Component
function CountdownTimer() {
  const calculateTimeLeft = () => {
    const launchDate = new Date('2024-12-25T00:00:00'); // Set your launch date here
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center space-y-1">
      <h2 className="text-base font-bold text-gray-700">Launching In</h2>
      <div className="flex justify-center space-x-2">
        {Object.keys(timeLeft).map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-xl font-extrabold text-gray-800">{timeLeft[unit]}</span>
            <span className="text-xs text-gray-600 uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LaunchingSoonPageMobile() {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/HIauoHuKHdP3XHbPzDpVPV', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-white shadow z-10">
        <section className="w-full py-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-lg font-normal text-gray-700 mb-1">
              Serene <span className="font-bold">MINDS</span>
            </h2>
            <h1 className="text-xl font-extrabold tracking-tight text-gray-800 mb-2">
              All-in-One AI-Based Workflow Management Tool for Health Professionals
            </h1>
            <p className="mx-auto max-w-[280px] text-gray-600 text-sm mb-3">
              Streamline client interactions, assessments, and payments. Launching soon!
            </p>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* Join Button */}
            <div className="flex justify-center mt-2 mb-4">
              <Button onClick={handleWhatsAppJoin} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full shadow-lg flex items-center">
                <FaPaperPlane className="mr-1 h-4 w-4" /> Join WhatsApp for Early Access
              </Button>
            </div>
          </div>
        </section>
      </header>

      {/* Features Section */}
      <main className="flex-1 overflow-y-auto py-4">
        <section className="w-full py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-extrabold tracking-tight text-center text-gray-800 mb-4">
              Key Features
            </h2>
            {/* 2-Column Grid for Features */}
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<FaClinicMedical className="h-6 w-6 text-red-500" />}
                title="Online Clinic"
                description="Set up your clinic at no cost."
              />
              <FeatureCard
                icon={<FaUserPlus className="h-6 w-6 text-blue-500" />}
                title="Onboarding"
                description="Onboard clients with two clicks."
              />
              <FeatureCard
                icon={<FaClipboardCheck className="h-6 w-6 text-green-500" />}
                title="Assessments"
                description="50+ assessments for clients."
              />
              <FeatureCard
                icon={<FaShareSquare className="h-6 w-6 text-yellow-500" />}
                title="AI Assistant"
                description="AI-powered diagnosis."
              />
              <FeatureCard
                icon={<FaCalendarAlt className="h-6 w-6 text-orange-500" />}
                title="Appointments"
                description="Easy scheduling."
              />
              <FeatureCard
                icon={<FaCreditCard className="h-6 w-6 text-purple-500" />}
                title="Payments"
                description="Secure payment processing."
              />
              <FeatureCard
                icon={<FaFileAlt className="h-6 w-6 text-pink-500" />}
                title="Client Logs"
                description="Detailed record keeping."
              />
              <FeatureCard
                icon={<FaGlobe className="h-6 w-6 text-green-500" />}
                title="Landing Page"
                description="Promote services online."
              />
              <FeatureCard
                icon={<FaShareSquare className="h-6 w-6 text-blue-500" />}
                title="WhatsApp/Google"
                description="Integrate seamlessly."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-2 rounded-full bg-gray-100 p-2 text-primary">
        {icon}
      </div>
      <h3 className="text-md font-bold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

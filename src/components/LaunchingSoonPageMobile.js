'use client';

import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { FaUserPlus, FaClipboardCheck, FaCalendarAlt, FaCreditCard, FaFileAlt, FaShareSquare, FaPaperPlane } from 'react-icons/fa'; 

export default function LaunchingSoonPageMobile() {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/HIauoHuKHdP3XHbPzDpVPV', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-white shadow z-10">
        <section className="w-full py-6 md:py-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-lg font-normal text-gray-700 mb-2">
              Serene <span className="font-bold">MINDS</span>
            </h2>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 mb-2">
              Your All-in-One Client Management Solution
            </h1>
            <p className="mx-auto max-w-[300px] text-gray-600 md:text-lg lg:text-xl mb-4">
              Streamline your client interactions, assessments, and payments. Launching soon!
            </p>
            {/* Centering the Button */}
            <div className="flex justify-center mt-2 mb-4">
              <Button onClick={handleWhatsAppJoin} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
                <FaPaperPlane className="mr-1 h-4 w-4" /> Join WhatsApp for Early Access
              </Button>
            </div>
          </div>
        </section>
      </header>

      {/* Main Section for Features */}
      <main className="flex-1 overflow-y-auto pt-4">
        <section className="w-full py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-extrabold tracking-tight text-center text-gray-800 mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard icon={<FaUserPlus className="h-8 w-8 text-blue-500" />} title="Client Onboarding" description="Seamlessly onboard new clients with our intuitive process." />
              <FeatureCard icon={<FaClipboardCheck className="h-8 w-8 text-green-500" />} title="Assessments" description="Conduct comprehensive client assessments with ease." />
              <FeatureCard icon={<FaCalendarAlt className="h-8 w-8 text-orange-500" />} title="Appointment Booking" description="Effortless scheduling and management of client appointments." />
              <FeatureCard icon={<FaCreditCard className="h-8 w-8 text-purple-500" />} title="Secure Payments" description="Process payments securely and efficiently." />
              <FeatureCard icon={<FaFileAlt className="h-8 w-8 text-pink-500" />} title="Client Logs" description="Maintain detailed logs of client interactions and progress." />
              <FeatureCard icon={<FaShareSquare className="h-8 w-8 text-yellow-500" />} title="Integrations" description="Seamlessly integrate with Google and WhatsApp for enhanced communication." />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-3 rounded-full bg-gray-100 p-3 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

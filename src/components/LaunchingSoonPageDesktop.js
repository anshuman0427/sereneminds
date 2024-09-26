'use client';

import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { FaUserPlus, FaClipboardCheck, FaCalendarAlt, FaCreditCard, FaFileAlt, FaShareSquare, FaPaperPlane } from 'react-icons/fa'; 

export default function LaunchingSoonPageDesktop() {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/HIauoHuKHdP3XHbPzDpVPV', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                {/* Brand Name */}
                <h2 className="text-2xl font-normal text-gray-700">
                  Serene <span className="font-bold">MINDS</span>
                </h2>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-800">
                  Your All-in-One AI based Client Management Solution
                </h1>
                <p className="mx-auto max-w-[650px] text-gray-600 md:text-lg lg:text-xl">
                  Streamline your health practice by automating client interactions, assessments, and payments. Launching soon!
                </p>
              </div>
              <div className="mt-8">
                <Button onClick={handleWhatsAppJoin} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
                  <FaPaperPlane className="mr-2 h-4 w-4" /> Join WhatsApp for Early Access
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center text-gray-800 mb-12">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <FeatureCard
                icon={<FaUserPlus className="h-8 w-8 text-blue-500" />}
                title="Client Onboarding"
                description="Seamlessly onboard new clients with our intuitive process."
              />
              <FeatureCard
                icon={<FaClipboardCheck className="h-8 w-8 text-green-500" />}
                title="Assessments"
                description="Conduct comprehensive client assessments with ease."
              />
              <FeatureCard
                icon={<FaCalendarAlt className="h-8 w-8 text-orange-500" />}
                title="Appointment Booking"
                description="Effortless scheduling and management of client appointments."
              />
              <FeatureCard
                icon={<FaCreditCard className="h-8 w-8 text-purple-500" />}
                title="Secure Payments"
                description="Process payments securely and efficiently."
              />
              <FeatureCard
                icon={<FaFileAlt className="h-8 w-8 text-pink-500" />}
                title="Client Logs"
                description="Maintain detailed logs of client interactions and progress."
              />
              <FeatureCard
                icon={<FaShareSquare className="h-8 w-8 text-yellow-500" />}
                title="AI-Based Diagnosis"
                description="Leverage AI for accurate diagnosis and tailored suggestions based on assessments, enhancing your understanding of client needs."
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
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 rounded-full bg-gray-100 p-3 text-primary">
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

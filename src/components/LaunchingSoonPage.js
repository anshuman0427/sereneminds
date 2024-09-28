'use client';

import { useEffect, useState } from 'react';
import LaunchingSoonPageDesktop from './LaunchingSoonPageDesktop';
import LaunchingSoonPageMobile from './LaunchingSoonPageMobile';
import { Analytics } from '@vercel/analytics/react'; 

export default function LaunchingSoonPage() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000); // Consider mobile if width is less than 768px
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <LaunchingSoonPageMobile /> : <LaunchingSoonPageDesktop />;
}

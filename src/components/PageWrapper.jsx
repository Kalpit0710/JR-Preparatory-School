import React, { useState, useEffect } from 'react';
import AboutUsSection from './aboutus';
import './PageWrapper.css';
import OurStrengths from './Strengths';
import Footer from './Footer';
import Hero from './Hero';
import Visionaries from './Visionaries';

const PageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <main>
          <Hero />
          <AboutUsSection />
          <Visionaries />
          <OurStrengths />
          <Footer />
        </main>
      )}
    </div>
  );
};

export default PageWrapper;

import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Rooms from './components/sections/Rooms';
import Gallery from './components/sections/Gallery';
import Amenities from './components/sections/Amenities';
import Attractions from './components/sections/Attractions';
import Reviews from './components/sections/Reviews';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Blossom Homestay - Experience Nature Like Never Before';
    
    // Add animation classes
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.8s ease forwards;
      }
      
      .animate-fadeInDelay {
        animation: fadeIn 0.8s ease 0.3s forwards;
      }
      
      .animate-fadeInDelay2 {
        animation: fadeIn 0.8s ease 0.6s forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Amenities />
        <Attractions />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 opacity-0 animate-fadeIn">
        Feel at Home, Wherever You Roam 
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 animate-fadeInDelay">
          Escape to our serene homestay nestled in the heart of pristine wilderness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInDelay2">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToBooking}
          >
            Book Your Stay
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white border-white hover:bg-white hover:bg-opacity-20"
          >
            Explore Gallery
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
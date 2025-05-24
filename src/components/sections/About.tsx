import React from 'react';
import Section from '../ui/Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Our Homestay" subtitle="Discover the story behind our peaceful retreat">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Nestled in the heart of Jorhat, Assam, Blossom Homestay was born from our deep-rooted love for meaningful connections and warm hospitality. What began as our cherished family home has grown into a peaceful retreat for travelers seeking authentic Assamese experiences away from the rush of city life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our homestay is more than just a place to stay — it's an invitation to slow down, breathe deeply, and embrace the simplicity of life in Assam. From traditional architecture to serene surroundings, every corner of Blossom Homestay is thoughtfully designed to offer comfort while staying true to its cultural roots.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a family-run homestay, we take pride in offering personalized care and sharing the rich heritage, cuisine, and lesser-known gems of our region. Whether you're sipping a warm cup of tea in the garden or exploring local traditions, your stay with us promises memories rooted in warmth, authenticity, and peace.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="/images/Screenshot 2025-05-24 165917.png" 
              alt="Homestay exterior" 
              className="rounded-lg h-48 w-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
            <img 
              src="/images/Screenshot 2025-05-24 170037.png" 
              alt="Lounge area" 
              className="rounded-lg h-64 w-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
          <div className="space-y-4 mt-8">
            <img 
              src="/images/Screenshot 2025-05-24 170201.png" 
              alt="Bedroom" 
              className="rounded-lg h-64 w-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
            <img 
              src="/images/Screenshot 2025-05-24 170316.png" 
              alt="Bathroom" 
              className="rounded-lg h-48 w-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Full-width image section */}
      <div className="mt-16 rounded-xl overflow-hidden shadow-xl">
        <img 
          src="/images/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__3.jpg" 
          alt="Scenic view from Blossom Homestay" 
          className="w-full h-auto max-h-[500px] object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Experience the Beauty of Nature</h3>
        <p className="text-gray-600">
          Every corner of Blossom Homestay is designed to help you unwind and connect with nature. 
          Our carefully curated spaces ensure a memorable stay surrounded by breathtaking views and peaceful surroundings.
        </p>
      </div>
    </Section>
  );
};

export default About;
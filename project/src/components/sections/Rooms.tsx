import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { rooms } from '../../data';

const Rooms: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const activeRoom = rooms[activeRoomIndex];
  
  const nextRoom = () => {
    setActiveRoomIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
    setActiveImageIndex(0);
  };
  
  const prevRoom = () => {
    setActiveRoomIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    setActiveImageIndex(0);
  };
  
  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === activeRoom.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? activeRoom.images.length - 1 : prev - 1
    );
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Section 
      id="rooms" 
      title="Our Accommodations" 
      subtitle="Experience the perfect blend of classic elegance and modern comfort in our carefully curated 1BHK & 2BHK units"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Room Image Carousel */}
        <div className="relative rounded-lg overflow-hidden group h-[400px]">
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out transform"
            style={{
              backgroundImage: `url(${activeRoom.images[activeImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          
          {/* Image Navigation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <button 
              onClick={prevImage}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
            {activeRoom.images.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Room Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-serif font-bold text-green-800">{activeRoom.name}</h3>
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevRoom}
                className="p-2 rounded-full border border-green-800 text-green-800 hover:bg-green-50 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextRoom}
                className="p-2 rounded-full border border-green-800 text-green-800 hover:bg-green-50 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <p className="text-gray-700">{activeRoom.description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-green-800 mb-2">Room Features</h4>
              <ul className="space-y-2">
                {activeRoom.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check size={16} className="text-green-600 mr-2" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-2">Room Details</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" />
                  {activeRoom.name.includes('1BHK') ? '1 Bedroom' : '2 Bedrooms'}
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" />
                  {activeRoom.amenities.find(a => a.includes('Bath'))}
                </li>
                <li className="font-semibold text-lg">₹{activeRoom.price} / night</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-4">
            <Button onClick={scrollToBooking} variant="primary" fullWidth>
              Book This {activeRoom.name.includes('1BHK') || activeRoom.name.includes('2BHK') ? 'Unit' : 'Room'}
            </Button>
            <p className="mt-2 text-sm text-gray-500 text-center">
              {activeRoom.name.includes('1BHK') ? 'Ideal for couples' : 'Perfect for families'}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Rooms;
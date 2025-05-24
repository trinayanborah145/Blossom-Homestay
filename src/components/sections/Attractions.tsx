import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { MapPin, ExternalLink } from 'lucide-react';
import { attractions } from '../../data';

const Attractions: React.FC = () => {
  const handleCardClick = (mapLink: string) => {
    window.open(mapLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section 
      id="attractions" 
      title="Nearby Attractions" 
      subtitle="Discover the natural and cultural treasures in our vicinity"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {attractions.map((attraction) => (
          <Card 
            key={attraction.id}
            className="overflow-hidden group cursor-pointer"
            hoverable
            onClick={() => handleCardClick(attraction.mapLink)}
          >
            <div className="relative h-48">
              <img 
                src={attraction.image} 
                alt={attraction.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-green-800 text-white px-2 py-1 rounded-full text-xs flex items-center">
                <MapPin size={12} className="mr-1" />
                {attraction.distance}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                {attraction.name}
                <ExternalLink size={14} className="ml-2 text-gray-500" />
              </h3>
              <p className="text-gray-700 text-sm mb-3">{attraction.description}</p>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <MapPin size={12} className="mr-1 flex-shrink-0" />
                <span className="truncate">{attraction.location}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Attractions;
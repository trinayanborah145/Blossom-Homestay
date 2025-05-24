import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Wifi, Utensils, Car, Mountain, Fan, Coffee, ShieldCheck, Dog } from 'lucide-react';
import { amenities } from '../../data';

const Amenities: React.FC = () => {
  // Function to render the correct icon based on icon name
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 32, className: "text-green-600 mb-4" };
    
    switch (iconName) {
      case 'Wifi': return <Wifi {...iconProps} />;
      case 'Utensils': return <Utensils {...iconProps} />;
      case 'Car': return <Car {...iconProps} />;
      case 'Mountain': return <Mountain {...iconProps} />;
      case 'Fan': return <Fan {...iconProps} />;
      case 'Coffee': return <Coffee {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'Dog': return <Dog {...iconProps} />;
      default: return null;
    }
  };
  
  return (
    <Section 
      id="amenities" 
      title="Facilities & Amenities" 
      subtitle="Everything you need for a comfortable and memorable stay"
      dark
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {amenities.map((amenity) => (
          <Card 
            key={amenity.id} 
            className="bg-green-800 p-6 text-center hover:bg-green-700 transition-colors"
            hoverable
          >
            {renderIcon(amenity.icon)}
            <h3 className="text-xl font-medium text-white mb-2">{amenity.name}</h3>
            <p className="text-green-100 text-sm">{amenity.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Amenities;
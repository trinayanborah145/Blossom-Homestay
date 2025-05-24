import React, { useState } from 'react';
import Section from '../ui/Section';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: '/images/FileUpload.jpg',
      alt: 'Nearest Tourist attraction view',
      category: 'attractions'
    },
    {
      src: '/images/Flux_Dev_Create_a_warm_and_inviting_image_for_the_homepage_of__0.jpg',
      alt: 'Spacious living area with modern decor',
      category: 'property'
    },
    {
      src: '/images/pexels-scene-design-144978225-29305006.jpg',
      alt: 'Modern dining area with elegant decor',
      category: 'property'
    },
    {
      src: '/images/Screenshot 2025-05-24 165917.png',
      alt: 'Bedroom view of our homestay balcony',
      category: 'views'
    },
    {
      src: '/images/Screenshot 2025-05-24 165944.png',
      alt: 'Premium Feel',
      category: 'rooms'
    },
    {
      src: '/images/Flux_Dev_A_sleek_and_contemporary_bathroom_with_premium_amenit_2.jpg',
      alt: 'Modern bathroom with premium amenities',
      category: 'rooms'
    }
  ];

  return (
    <Section id="gallery" title="Photo Gallery" subtitle="Explore our property and surroundings through images">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="overflow-hidden rounded-lg h-64 cursor-pointer relative group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-3 w-full bg-black bg-opacity-60 text-white text-sm">
                {image.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </Section>
  );
};

export default Gallery;
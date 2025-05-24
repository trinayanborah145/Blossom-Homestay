import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Star } from 'lucide-react';
import { reviews } from '../../data';

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
      />
    ));
  };
  
  return (
    <Section 
      id="reviews" 
      title="Guest Reviews" 
      subtitle="See what our guests have to say about their stay with us"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Card 
            key={review.id}
            className="p-6"
            hoverable
          >
            <div className="flex items-center mb-4">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
            <div className="text-gray-500 text-sm">
              {new Date(review.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-flex items-center text-green-800 hover:text-green-700 font-medium"
        >
          View all reviews on Google
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default Reviews;
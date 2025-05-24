import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { rooms } from '../../data';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the booking data to a server
    alert('Booking request submitted! We will contact you shortly to confirm your reservation.');
    // Reset form
    setFormData({
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: '',
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };
  
  return (
    <Section 
      id="booking" 
      title="Book Your Stay" 
      subtitle="Reserve your perfect getaway in just a few steps"
      dark
    >
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stay Details */}
            <div>
              <h3 className="text-xl font-serif text-green-800 mb-4">Stay Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="checkIn" className="block text-gray-700 mb-1">Check In</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="checkOut" className="block text-gray-700 mb-1">Check Out</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-1">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="roomType" className="block text-gray-700 mb-1">Room Type</label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} (₹{room.price}/night)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Guest Information */}
            <div>
              <h3 className="text-xl font-serif text-green-800 mb-4">Guest Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="specialRequests" className="block text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button type="submit" variant="primary" fullWidth>
              Request Booking
            </Button>
            <p className="text-gray-500 text-sm text-center mt-2">
              We'll contact you within 24 hours to confirm availability and process your booking.
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Booking;
export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  images: string[];
  amenities: string[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  image: string;
  mapLink: string;
  location: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}
import { Room, Review, Attraction, Amenity } from '../types';
import { Wifi, Utensils, Car, Mountain, Fan, Coffee, ShieldCheck, Dog } from 'lucide-react';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Classic 1BHK Suite',
    description: 'Elegant 1BHK suite featuring vintage textures and classic decor. Perfect for couples or solo travelers seeking a cozy retreat with timeless charm.',
    price: 1000,
    capacity: 2,
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: ['1 Bedroom', '1 Bath', 'Kitchenette', 'Living area', 'Vintage decor', 'Free Wi-Fi', 'Air conditioning']
  },
  {
    id: '2',
    name: 'Vintage 1BHK Deluxe',
    description: 'Charming 1BHK unit with classic wooden furniture and antique accents. Experience the perfect blend of vintage aesthetics and modern comforts.',
    price: 200,
    capacity: 2,
    images: [
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: ['1 Bedroom', '1 Bath', 'Kitchenette', 'Balcony', 'Vintage furniture', 'Free Wi-Fi', 'Air conditioning']
  },
  {
    id: '3',
    name: 'Heritage 2BHK Suite',
    description: 'Spacious 2BHK suite featuring classic architectural elements and vintage-inspired interiors. Ideal for families or small groups.',
    price: 300,
    capacity: 4,
    images: [
      'https://images.pexels.com/photos/11276087/pexels-photo-11276087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: ['2 Bedrooms', '2 Baths', 'Full kitchen', 'Living area', 'Dining space', 'Classic decor', 'Free Wi-Fi']
  },
  {
    id: '4',
    name: 'Royal 2BHK Villa',
    description: 'Luxurious 2BHK villa with vintage royal aesthetics and modern amenities. Features elegant furnishings and premium finishes.',
    price: 350,
    capacity: 4,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: ['2 Bedrooms', '2 Baths', 'Full kitchen', 'Living room', 'Dining area', 'Premium linens', 'Free Wi-Fi', 'Air conditioning']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Prachi Choudhury',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    comment: 'An absolutely magical stay! The surroundings were breathtaking and the hospitality was exceptional. Can\'t wait to return!',
    date: '2023-06-15'
  },
  {
    id: '2',
    name: 'Abhinav Sharma',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    comment: 'Beautiful property with excellent amenities. The hosts were very accommodating and the food was delicious. Highly recommend!',
    date: '2023-07-20'
  },
  {
    id: '3',
    name: 'Minakshi Dutta',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    comment: 'Perfect getaway from the city! The peace and quiet was exactly what we needed. The hiking trails nearby were an added bonus.',
    date: '2023-08-05'
  }
];

export const attractions: Attraction[] = [
  {
    id: '1',
    name: 'Sukapha Samannay Kshetra',
    description: 'A cultural landmark honoring Ahom king Sukapha, the founder of the Ahom dynasty. It beautifully showcases Assam\'s unity, heritage, and historical legacy.',
    distance: '10 km',
    image: '/images/FileUpload.jpg',
    mapLink: 'https://www.google.com/maps/dir//P38G%2BCF2,+AT+Road,+NH-37+715,+Mohbondha+Rd,+Bhurakala+No.2,+Assam+785006/@26.7167178,93.9946829,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3746eab437cfc43f:0x133ddea2aa0838d4!2m2!1d94.0770844!2d26.7167416?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D',
    location: 'AT Road, NH-37 715, Mohbondha Rd, Bhurakala No.2, Assam 785006'
  },
  {
    id: '2',
    name: 'Toklai Tea Research Centre',
    description: 'Established in 1911, it\'s the world\'s oldest and largest tea research center. Explore Assam\'s rich tea heritage and innovations in tea cultivation here.',
    distance: '15 km',
    image: '/images/unnamed.webp',
    mapLink: 'https://www.google.com/maps/dir//Tocklai+Tea+Research+Institute,+Cinnamara,+Lichubari,+Jorhat,+Assam+785008/@26.7288542,94.1456812,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3746e803e464b57f:0x7cb3fb71abad372a!2m2!1d94.2280827!2d26.728878?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D',
    location: 'Cinnamara, Lichubari, Jorhat, Assam 785008'
  },
  {
    id: '3',
    name: 'Hollongapar Gibbon Sanctuary',
    description: 'Home to India\'s only ape, the Hoolock Gibbon, and lush evergreen forests. A paradise for wildlife lovers and nature enthusiasts.',
    distance: '25 km',
    image: '/images/unnamed (1).webp',
    mapLink: 'https://www.google.com/maps/dir//M985%2B9WX,+Mariani,+Jorhat,+Assam+785635/@26.6659529,94.2774729,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3746e0e39d831f53:0x206967dff0222cbd!2m2!1d94.3598744!2d26.6659767?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D',
    location: 'Mariani, Jorhat, Assam 785635'
  },
  {
    id: '4',
    name: 'Majuli',
    description: 'The world\'s largest river island, nestled in the mighty Brahmaputra. Known for its satras (Vaishnavite monasteries), vibrant culture, and scenic beauty.',
    distance: '30 km',
    image: '/images/licensed-image.jpg',
    mapLink: 'https://www.google.com/maps/dir//majuli/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3746c41068c5707f:0x3dd7532bf70e8c60?sa=X&ved=1t:155782&ictx=111',
    location: 'Majuli, Assam'
  }
];

export const amenities: Amenity[] = [
  {
    id: '1',
    name: 'Free Wi-Fi',
    icon: 'Wifi',
    description: 'High-speed internet available throughout the property'
  },
  {
    id: '2',
    name: 'Home-cooked Meals',
    icon: 'Utensils',
    description: 'Delicious local cuisine prepared with fresh ingredients'
  },
  {
    id: '3',
    name: 'Parking',
    icon: 'Car',
    description: 'Free on-site parking for all guests'
  },
  {
    id: '4',
    name: 'Nature Walks',
    icon: 'Mountain',
    description: 'Guided walks through the surrounding natural landscape'
  },
  {
    id: '5',
    name: 'Air Conditioning',
    icon: 'Fan',
    description: 'Climate control in all rooms for your comfort'
  },
  {
    id: '6',
    name: 'Complimentary Breakfast',
    icon: 'Coffee',
    description: 'Fresh breakfast served daily with local specialties'
  },
  {
    id: '7',
    name: '24/7 Security',
    icon: 'ShieldCheck',
    description: 'Round-the-clock security for peace of mind'
  },
  {
    id: '8',
    name: 'Pet Friendly',
    icon: 'Dog',
    description: 'Well-behaved pets are welcome in selected accommodations'
  }
];
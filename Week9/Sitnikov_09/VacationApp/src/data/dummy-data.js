// src/data/dummy-data.js
import Country from '../models/Country';
import Destination from '../models/Destination';

export const COUNTRIES = [
  new Country(
    'c1',
    'United States',
    '#1f3b57',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
  ),
  new Country(
    'c2',
    'Italy',
    '#8c2f39',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  ),
  new Country(
    'c3',
    'Japan',
    '#2f4858',
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c'
  ),
  new Country(
    'c4',
    'France',
    '#5c3c92',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  ),
  new Country(
    'c5',
    'Brazil',
    '#0b8457',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  ),
  new Country(
    'c6',
    'Australia',
    '#f29f05',
    'https://images.unsplash.com/photo-1506976785307-8732e854ad03'
  ),
  new Country(
    'c7',
    'Egypt',
    '#c97b63',
    'https://images.unsplash.com/photo-1544989164-31dc3c645987'
  ),
  new Country(
    'c8',
    'Canada',
    '#1b4965',
    'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5c5'
  ),
  new Country(
    'c9',
    'South Africa',
    '#145374',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba'
  ),
  new Country(
    'c10',
    'Thailand',
    '#f25f5c',
    'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0'
  ),
];

export const DESTINATIONS = [
  // USA
  new Destination(
    'd1',
    'c1',
    'Grand Canyon',
    '$1,800',
    1919,
    4.8,
    'A massive canyon in Arizona known for its layered red rock and breathtaking views.',
    'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5c5'
  ),
  new Destination(
    'd2',
    'c1',
    'New York City',
    '$2,500',
    1624,
    4.7,
    'The city that never sleeps, famous for its skyline, Broadway, and diverse culture.',
    'https://images.unsplash.com/photo-1534447677768-be436bb09401'
  ),

  // Italy
  new Destination(
    'd3',
    'c2',
    'Venice',
    '$2,200',
    421,
    4.6,
    'A romantic city built on canals, known for gondolas, bridges, and historic architecture.',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  ),
  new Destination(
    'd4',
    'c2',
    'Rome',
    '$2,300',
    -753,
    4.9,
    'The Eternal City, home to the Colosseum, Vatican City, and centuries of history.',
    'https://images.unsplash.com/photo-1526481280695-3c687fd543c0'
  ),

  // Japan
  new Destination(
    'd5',
    'c3',
    'Tokyo',
    '$2,800',
    1603,
    4.8,
    'A vibrant metropolis blending cutting-edge technology with deep tradition.',
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c'
  ),
  new Destination(
    'd6',
    'c3',
    'Kyoto',
    '$2,400',
    794,
    4.9,
    'Known for temples, shrines, and beautiful seasonal scenery.',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2'
  ),

  // France
  new Destination(
    'd7',
    'c4',
    'Paris',
    '$2,600',
    -52,
    4.7,
    'The City of Light, famous for the Eiffel Tower, art, and cuisine.',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  ),
  new Destination(
    'd8',
    'c4',
    'Nice',
    '$2,300',
    -350,
    4.5,
    'A coastal city on the French Riviera with beautiful beaches and promenades.',
    'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0'
  ),

  // Brazil
  new Destination(
    'd9',
    'c5',
    'Rio de Janeiro',
    '$2,100',
    1565,
    4.6,
    'Known for its beaches, Carnival, and Christ the Redeemer statue.',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  ),
  new Destination(
    'd10',
    'c5',
    'São Paulo',
    '$2,000',
    1554,
    4.3,
    'A bustling financial hub with rich culture and nightlife.',
    'https://images.unsplash.com/photo-1526481280695-3c687fd543c0'
  ),

  // Australia
  new Destination(
    'd11',
    'c6',
    'Sydney',
    '$2,900',
    1788,
    4.7,
    'Home to the Sydney Opera House and beautiful harbor views.',
    'https://images.unsplash.com/photo-1506976785307-8732e854ad03'
  ),
  new Destination(
    'd12',
    'c6',
    'Great Barrier Reef',
    '$3,100',
    1975,
    4.9,
    'The world’s largest coral reef system, ideal for diving and snorkeling.',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'
  ),

  // Egypt
  new Destination(
    'd13',
    'c7',
    'Cairo',
    '$1,900',
    969,
    4.4,
    'Gateway to the Pyramids of Giza and rich ancient history.',
    'https://images.unsplash.com/photo-1544989164-31dc3c645987'
  ),
  new Destination(
    'd14',
    'c7',
    'Luxor',
    '$1,800',
    -1500,
    4.6,
    'Known for temples and tombs along the Nile.',
    'https://images.unsplash.com/photo-1544989164-31dc3c645987'
  ),

  // Canada
  new Destination(
    'd15',
    'c8',
    'Banff',
    '$2,000',
    1885,
    4.8,
    'A mountain town in the Canadian Rockies with stunning lakes and peaks.',
    'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5c5'
  ),
  new Destination(
    'd16',
    'c8',
    'Vancouver',
    '$2,200',
    1886,
    4.5,
    'A coastal city surrounded by mountains and ocean.',
    'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5c5'
  ),

  // South Africa
  new Destination(
    'd17',
    'c9',
    'Cape Town',
    '$2,100',
    1652,
    4.7,
    'Famous for Table Mountain and coastal scenery.',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba'
  ),
  new Destination(
    'd18',
    'c9',
    'Kruger National Park',
    '$2,500',
    1926,
    4.9,
    'One of Africa’s largest game reserves, ideal for safaris.',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba'
  ),

  // Thailand
  new Destination(
    'd19',
    'c10',
    'Bangkok',
    '$1,700',
    1782,
    4.4,
    'A vibrant city known for temples, street food, and nightlife.',
    'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0'
  ),
  new Destination(
    'd20',
    'c10',
    'Phuket',
    '$1,900',
    1800,
    4.6,
    'An island with beautiful beaches and resorts.',
    'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0'
  ),
];

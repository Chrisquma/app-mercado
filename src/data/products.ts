import { Product } from '../types';

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Fresh Apples',
    description: 'Sweet and crispy red apples',
    price: 2.99,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    stock: 100
  },
  {
    id: '2',
    name: 'Organic Bananas',
    description: 'Ripe and ready to eat bananas',
    price: 1.99,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e',
    stock: 150
  },
  {
    id: '3',
    name: 'Fresh Oranges',
    description: 'Juicy California oranges',
    price: 3.49,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e',
    stock: 120
  },
  {
    id: '4',
    name: 'Red Grapes',
    description: 'Sweet seedless grapes',
    price: 4.99,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f',
    stock: 80
  },
  // Vegetables
  {
    id: '5',
    name: 'Fresh Broccoli',
    description: 'Crisp and nutritious broccoli',
    price: 2.49,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc',
    stock: 75
  },
  {
    id: '6',
    name: 'Carrots',
    description: 'Fresh organic carrots',
    price: 1.99,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    stock: 100
  },
  {
    id: '7',
    name: 'Spinach',
    description: 'Fresh baby spinach',
    price: 3.99,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
    stock: 60
  },
  {
    id: '8',
    name: 'Bell Peppers',
    description: 'Mixed color bell peppers',
    price: 3.99,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83',
    stock: 70
  },
  // Meat
  {
    id: '9',
    name: 'Premium Beef Steak',
    description: 'Prime cut beef steak',
    price: 15.99,
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e',
    stock: 40
  },
  {
    id: '10',
    name: 'Chicken Breast',
    description: 'Boneless skinless chicken breast',
    price: 8.99,
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791',
    stock: 60
  },
  {
    id: '11',
    name: 'Ground Beef',
    description: 'Lean ground beef',
    price: 6.99,
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976',
    stock: 50
  },
  // Seafood
  {
    id: '12',
    name: 'Atlantic Salmon',
    description: 'Fresh wild-caught salmon',
    price: 12.99,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c',
    stock: 50
  },
  {
    id: '13',
    name: 'Shrimp',
    description: 'Large peeled shrimp',
    price: 14.99,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47',
    stock: 40
  },
  // Dairy
  {
    id: '14',
    name: 'Whole Milk',
    description: 'Fresh whole milk',
    price: 3.99,
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
    stock: 100
  },
  {
    id: '15',
    name: 'Cheese',
    description: 'Aged cheddar cheese',
    price: 5.99,
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b',
    stock: 80
  },
  // Bakery
  {
    id: '16',
    name: 'Fresh Bread',
    description: 'Artisan sourdough bread',
    price: 4.99,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73',
    stock: 30
  },
  {
    id: '17',
    name: 'Croissants',
    description: 'Butter croissants',
    price: 2.99,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    stock: 40
  },
  // Beverages
  {
    id: '18',
    name: 'Orange Juice',
    description: 'Fresh squeezed orange juice',
    price: 4.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b',
    stock: 60
  },
  {
    id: '19',
    name: 'Sparkling Water',
    description: 'Natural sparkling water',
    price: 1.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504',
    stock: 100
  },
  // Snacks
  {
    id: '20',
    name: 'Potato Chips',
    description: 'Classic potato chips',
    price: 2.99,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b',
    stock: 120
  }
];
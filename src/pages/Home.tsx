import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ProductCategory } from '../types';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const categories: ProductCategory[] = ['fruits', 'vegetables', 'meat', 'seafood', 'dairy', 'bakery', 'beverages', 'snacks'];

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <ShoppingCart className="w-16 h-16 text-blue-600 mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to SuperMarket!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Please log in to browse our wide selection of fresh products, great deals, and exclusive offers.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-xl text-gray-600">
          Find the freshest products at the best prices
        </p>
      </div>

      <div className="flex overflow-x-auto py-4 -mx-4 px-4 space-x-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
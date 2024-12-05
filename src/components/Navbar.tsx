import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';

const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { items } = useCartStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            SuperMarket
          </Link>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/cart" className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </Link>
                <Link to="/profile" className="flex items-center space-x-2">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <UserIcon className="h-6 w-6 text-gray-600" />
                  )}
                  <span className="text-gray-800">{user?.name}</span>
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
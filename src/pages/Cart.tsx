import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, total, updateQuantity, removeItem } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Start shopping to add items to your cart</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>

      <div className="bg-white rounded-lg shadow">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-6 border-b border-gray-200 last:border-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-gray-900 font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="p-1 text-red-500 hover:bg-red-50 rounded-full"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center text-xl font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
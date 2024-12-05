import { create } from 'zustand';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: get().total + product.price,
        };
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }],
        total: get().total + product.price,
      };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
      total: state.items.reduce((total, item) => 
        item.id === productId ? total : total + item.price * item.quantity, 0
      ),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
      total: state.items.reduce((total, item) => 
        total + item.price * (item.id === productId ? quantity : item.quantity), 0
      ),
    })),
  clearCart: () => set({ items: [], total: 0 }),
}));
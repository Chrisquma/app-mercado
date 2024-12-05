export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  address?: Address;
  paymentMethods?: PaymentMethod[];
  balance: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface PaymentMethod {
  id: string;
  type: 'credit' | 'debit';
  lastFourDigits: string;
  expiryDate: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  stock: number;
}

export type ProductCategory = 
  | 'fruits' 
  | 'vegetables' 
  | 'meat' 
  | 'seafood' 
  | 'dairy' 
  | 'bakery' 
  | 'beverages' 
  | 'snacks';
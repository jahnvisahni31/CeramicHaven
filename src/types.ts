export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};
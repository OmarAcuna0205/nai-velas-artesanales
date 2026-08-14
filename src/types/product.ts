export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number | null;
  category: string;
  imageUrl: string;
  available: boolean;
  isNew: boolean;
};
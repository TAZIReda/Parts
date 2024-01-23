export interface Part {
  id: string;
  name: string;
  description: string;
  reference: string;
  quantity: number;
  price: number;
  state: string;
  images: string;
  userId: string; // Added as per your request
}

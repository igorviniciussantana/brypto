export interface IProducts {
  id: number;
  name: string;
  description?: string;
  img_url: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface CardProps {
    items: IProducts[];
  }
  
export interface HomeProps {
  products: IProducts[];
}

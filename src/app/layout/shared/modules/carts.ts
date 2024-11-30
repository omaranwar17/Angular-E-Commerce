import { products } from "./products";



export interface carts {
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: cartProd[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface cartProd {
  count: number;
  _id: string;
  product: products;
  price: number;
}




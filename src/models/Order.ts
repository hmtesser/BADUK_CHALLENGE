import { Product } from "./Product";

export type Order = {
 // _id?:string;
  customerId:string;
  totalPrice:number;
  products:{
    id:string,
    quantity:number
  }[],
  createdAt?:Date,
  updatedAt?:Date
}


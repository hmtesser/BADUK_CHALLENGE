
export interface ICreateOrdersRequestDTO {
  customerId:string;  
  products: {
    id:string
    quantity:number
  }[]
  createdAt:Date
  updatedAt:Date;
  
}
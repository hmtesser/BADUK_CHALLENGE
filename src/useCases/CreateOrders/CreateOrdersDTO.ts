export interface products {
  id:string;
  quantity:number;
}

export interface ICreateOrdersRequestDTO {
  id:string;
  customerId:string;
  totalPrice:number;
  //createdAt:Date;
 // updatedAt:Date;
  products: Array<products>
  
}
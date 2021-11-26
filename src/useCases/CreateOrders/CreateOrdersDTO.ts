
export interface ICreateOrdersRequestDTO {
  customerId:string;  
  products: {
    id:string
    quantity:number
  }[]
  
}
export type Order = {
  customerId:string
  totalPrice:number
  products:{
    id:string,
    quantity:number
  }[],
}



export interface orders{
  id:string;
  name:string
  quantity:number
}

export class Orders{
  id:string;
  customerId:string;
  totalPrice:number;
  //createdAt
  //updatedAt
  products:orders
  constructor(props: Orders) {
    Object.assign(this,props)

}
}


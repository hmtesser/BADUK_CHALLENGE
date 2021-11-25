import { uuid } from 'uuidv4'
export interface orders{
  id:string;
  quantity:number
}

export class Orders{
  id:string;
  customerId:string;
  totalPrice:number;
  //createdAt
  //updatedAt
  products:Array<orders>
  constructor(props: Omit<Orders, 'id'>, id?: string) {

    Object.assign(this, props);
    if (!id) {
        this.id = uuid();
    }
}
}


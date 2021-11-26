import { Order } from "../models/Order";
  export interface IOrdersRepository {    
    save(orders:Order):Promise<void>
    find():Promise<Order[]>
  }

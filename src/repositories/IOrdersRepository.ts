import { Orders } from "../entities/Orders";
  export interface IOrdersRepository {    
    save(orders:Orders):Promise<void>
    find():Promise<void>
  }

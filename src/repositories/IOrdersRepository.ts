import { Orders } from "../entities/Orders";
  export interface IOrdersRepository {
    chkOrdersId(id:string):Promise<Orders>
    save(orders:Orders):Promise<void>
  }

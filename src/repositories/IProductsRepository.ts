import { Products } from "../entities/Products";
  export interface IProductsRepository { 
    find():Promise<void>
    save(products:Products):Promise<void>
  }

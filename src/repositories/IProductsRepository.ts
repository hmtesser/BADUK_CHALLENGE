import { Products } from "../entities/Products";
  export interface IProductsRepository { 
    chkProductId(id:string): Promise<Products>
    save(products:Products):Promise<void>
  }

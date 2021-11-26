import { Product } from "../models/Product"
  export interface IProductsRepository {
    save(products:Product):Promise<void>
    find(filters?: Partial<Product & {id:string}>):Promise<Product[]>
    findOne(id:string):Promise<Product | undefined>
    update(id:string,changes:Partial<Product>):Promise<void>
  }

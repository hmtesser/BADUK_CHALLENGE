import { ObjectID } from "bson";
import { Product } from "../../models/Product";
import { collections } from "../../services/database.service";

import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  private products = collections.products

  async save(products: Product){
    this.products.insertOne(products)
  }
  async find(filters?: Partial<Product> & {
    start?:Date | string
    end?:Date | string
    pageNumber?:number
    itensPerPage?:number
  }){
    console.log(filters)
    // if(!(filters.start&&filters.end)){  
    //   const newFilters = {createdAt:{$gte:new Date(filters.end),$lt:new Date(filters.start)}}
    //   const result = await this.products.find(newFilters).toArray()
    //   return result as unknown as Product[]
    // }
    // console.log(filters)
    // if((!filters.pageNumber&&filters.itensPerPage)){
    //   const result = await this.products.find().skip(
    //     filters.pageNumber > 0 ? (( filters.pageNumber - 1)*filters.itensPerPage): 0).toArray()
    //   return result as unknown as Product[]
    // }
console.log(filters.pageNumber);
    const result = await this.products.find().skip(filters.pageNumber > 0 ? ((
      filters.pageNumber - 1) * filters.itensPerPage):0).toArray()
    return result as unknown as Product[]

  }

  async findOne(id:string){
    const result = await this.products.find({_id:new ObjectID(id)}).toArray()
    return result[0] as unknown as Product
  }

  async update(id:string,changes:Partial<Product>){
    const result = await this.products.updateOne({_id: new ObjectID(id)},{$set:changes})
    console.log(id)
    console.log(changes)
    console.log(result)
  }

}
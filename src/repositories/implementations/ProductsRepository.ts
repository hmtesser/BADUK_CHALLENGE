import { ObjectId } from "mongodb"
import { Product } from "../../models/Product"
import { collections } from "../../services/database.service"

import { IProductsRepository } from "../IProductsRepository"

export class ProductsRepository implements IProductsRepository {
  private products = collections.products

//queries used for products

  async save(products: Product){
    this.products.insertOne(products)
  }
  async find(filters?: Partial<Product> & {
    start?:Date | string
    end?:Date | string
    pageNumber?:number
    itensPerPage?:number
  }){

    const obj = {... filters}


    if(!filters){
    const result = await this.products.find().toArray()
    return result as unknown as Product[]

  }

  const result = await this.products.find(obj).toArray()
  return result as unknown as Product[]
}
  async findOne(id:string){
    const result = await this.products.find({_id:new ObjectId(id)}).toArray()
    return result[0] as unknown as Product
  }

  async update(id:string,changes:Partial<Product>){
    const result = await this.products.updateOne({_id: new ObjectId(id)},{$set:changes})
  }

}
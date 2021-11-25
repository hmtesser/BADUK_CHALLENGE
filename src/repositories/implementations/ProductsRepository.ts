import { Products } from "../../entities/Products";
import { collections } from "../../services/database.service";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  private products = collections.products

  async save(products: Products){
    this.products.insertOne(products)
  }
  async find(){
    const result = await this.products.find().toArray()
    return result
  }

}
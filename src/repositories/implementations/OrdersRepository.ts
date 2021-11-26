import { Order } from "../../models/Order"
import { IOrdersRepository } from "../../repositories/IOrdersRepository"
import { collections } from "../../services/database.service"


export class OrdersRepository implements IOrdersRepository {

  private orders = collections.orders

  // Queries Used for Orders


  async save(orders: Order){
    this.orders.insertOne(orders)
  }

  async find(){
    const result = await this.orders.find().toArray()
    return result as unknown as Order[]
  }
}
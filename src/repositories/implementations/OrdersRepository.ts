import { Orders } from "../../entities/Orders"
import { IOrdersRepository } from "../../repositories/IOrdersRepository"
import { collections } from "../../services/database.service"


export class OrdersRepository implements IOrdersRepository {

  private orders = collections.orders



  async save(orders: Orders){
    this.orders.insertOne(orders)
  }

  async find(){
    const result = await this.orders.find().toArray()
    return result
  }
}
import { ObjectId } from "bson"
import { parse } from "dotenv"
import { FilterOperators } from "mongoose/node_modules/mongodb"
import { Order } from "../../models/Order"
import { IOrdersRepository } from "../../repositories/IOrdersRepository"
import { collections } from "../../services/database.service"


export class OrdersRepository implements IOrdersRepository {

  private orders = collections.orders

  // Queries Used for Orders


  async save(orders: Order) {
    this.orders.insertOne(orders)
  }

  async find(filters?: Partial<Order> & {
    start?: Date | string
    end?: Date | string
    pageNumber?: number
    ItensPerPage?: number
    gt:  string
    lt:  string
    ordersId: ObjectId
  }) {
    const obj = {
      ...filters
    }
   
    if (Object.keys(obj).length === 0) {
      const result = await this.orders.find().sort({ totalPrice: -1 }).toArray()

      return result as unknown as Order[]
    }

    if(obj.ordersId){
      const result = await this.orders.find({
        products: {$elemMatch : {id : {$in: obj.ordersId}}}
      }).toArray()
      return result as unknown as Order[]
    }

    if(obj.gt){
      const result = await this.orders.find({totalPrice:{$gte:parseInt(obj.gt)}}).toArray()
      return result as unknown as Order[]
    }
    if(obj.lt){
      const result = await this.orders.find({totalPrice:{$lte:parseInt(obj.lt)}}).toArray()
      return result as unknown as Order[]
    }
    
    if(obj.start&&obj.end){
      const startDate = new Date(obj.start).toISOString()
      const endDate = new Date(obj.end).toISOString()
      const result = await this.orders.find({
        createdAt: {
          $gte:new Date(startDate),
          $lte:new Date(endDate)}
        }).toArray()
      return result as unknown as Order[]
    }

    if(obj.start){
      const startDate = new Date(obj.start).toISOString()
      console.log(startDate)
      const result = await this.orders.find({createdAt: {$gte: new Date(startDate)}}).toArray()
      return result as unknown as Order[]
    }
    if(obj.end){
      const endDate = new Date(obj.end).toISOString()
      const result = await this.orders.find({createdAt: {$lte: new Date(endDate)}}).toArray()
      return result as unknown as Order[]
    }
  }
}
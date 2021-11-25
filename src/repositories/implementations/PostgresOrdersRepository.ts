import { Orders } from "../../entities/Orders"
import { IOrdersRepository } from "../../repositories/IOrdersRepository"


export class PostgresOrdersRepository implements IOrdersRepository {

  private orders: Orders[] = [];

  async chkOrdersId(id: string): Promise<Orders> {
    const orders = this.orders.find(orders => orders.id === id);
    return orders;
  }

  async save(orders: Orders){
    this.orders.push(orders);
  }
}
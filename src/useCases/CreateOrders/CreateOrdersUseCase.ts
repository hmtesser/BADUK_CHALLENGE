import  { Orders } from "../../entities/Orders";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { ICreateOrdersRequestDTO } from "../CreateOrders/CreateOrdersDTO";

export class CreateOrdersUseCase {


  constructor(
    private orderRepository: IOrdersRepository

  ){}
  
  async execute(data: ICreateOrdersRequestDTO) {
    const orders = new Orders(data)

    await this.orderRepository.save(orders)
    
    return
  


  }
}
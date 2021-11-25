import  { Orders } from "../../entities/Orders";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { ICreateOrdersRequestDTO } from "../CreateOrders/CreateOrdersDTO";

export class CreateOrdersUseCase {


  constructor(
    private orderRepository: IOrdersRepository

  ){}
  
  async execute(data: ICreateOrdersRequestDTO) {
   const orderAlreadyExists = await this.orderRepository.chkOrdersId(data.id);

   if(orderAlreadyExists){
     throw new Error ('Pedido já registrado no sistema')
   }


   const orders = new Orders(data)

   await this.orderRepository.save(orders);


  }
}
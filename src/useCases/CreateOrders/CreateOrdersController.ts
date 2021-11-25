import { CreateOrdersUseCase } from "./CreateOrdersUseCase";
import { Request, Response } from "express"
import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";


export class CreateOrdersController {


  async handle(request: Request, response: Response): Promise<Response> {
    const { id, customerId, totalPrice, products } = request.body

    //Database insertion

    const repository = new OrdersRepository()
    console.log(repository);
    const useCase = new CreateOrdersUseCase(repository)
    await useCase.execute({ id, customerId, totalPrice, products })
    return response.json({ message: "Order inserted tinto databank succesfully" })

  }

}


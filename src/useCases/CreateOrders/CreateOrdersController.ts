import { CreateOrdersUseCase } from "./CreateOrdersUseCase";
import { Request, Response } from "express"
import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { ICreateOrdersRequestDTO } from "./CreateOrdersDTO";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { CustomerRepository } from "../../repositories/implementations/CustomerRepository";


export class CreateOrdersController {


  async handle(request: Request<null,null,ICreateOrdersRequestDTO>, response: Response): Promise<Response> {
    const { customerId, products } = request.body

    //Database insertion

    const ordersRepository = new OrdersRepository()
    const customerRepository = new CustomerRepository()
    const productRepository = new ProductsRepository()
    const useCase = new CreateOrdersUseCase(ordersRepository,productRepository,customerRepository)
    await useCase.execute({ customerId, products })
    return response.json({ message: "Order inserted into databank succesfully" })

  }

}


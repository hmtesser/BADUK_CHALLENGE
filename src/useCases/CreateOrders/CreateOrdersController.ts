import { CreateOrdersUseCase } from "./CreateOrdersUseCase";

import { Request, Response } from "express"

export class CreateOrdersController {
  constructor(
    private createOrderUseCase: CreateOrdersUseCase
  ) { }


  async handle(request: Request, response: Response): Promise<Response> {

  

    const {id,  customerId, totalPrice, products} = request.body
    console.log(request.body);

    //insertion into database
    try {
      await this.createOrderUseCase.execute({
        id,
        customerId,
        totalPrice,
        products
      })   
        return response.status(201).json({ message: "Order has been inserted into the dabatase" }).send();
      

    } catch (err) {

      return response.status(400).json({ message: err.message || 'Erro inesperado' })
    }
  }

}


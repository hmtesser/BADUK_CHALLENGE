import { CreateProductsUseCase } from "./CreateProductsUseCase";
import { Request, Response } from "express"

export class CreateProductsController {
  constructor(
    private createProductsUseCase: CreateProductsUseCase
  ){}

  async handle(request:Request, response: Response ): Promise<Response>{

    const {id, name, price, quantity } = request.body;

    try {
      await this.createProductsUseCase.execute({
        id,
        name,
        price,
        quantity
      })
      if((!name&&!price&&!quantity&&!id)){
        return response.status(400).json({message: "campos incorretos"})
      }
      else{
        return response.status(201).json({ message: "Value has been inserted into the database"}).send()
      }
    } catch (err) {
      return response.status(400).json({message: err.message || 'Erro inesperado '})
    }

  }
}
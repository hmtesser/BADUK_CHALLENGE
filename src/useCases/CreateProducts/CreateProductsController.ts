import { CreateProductsUseCase } from "./CreateProductsUseCase"
import { Request, Response } from "express"
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository"

//Generic made controller for DB independency
export class CreateProductsController {
  async handle(request:Request, response: Response ): Promise<Response>{
    
    const {name, price, quantity } = request.body
    //Database insertion

    const repository = new ProductsRepository()
    const useCase = new CreateProductsUseCase(repository)
    await useCase.execute({name,price,quantity})
    return response.json({message: "Product inserted into databank succesfully"})
    }

  }
  
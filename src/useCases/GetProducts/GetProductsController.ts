import { Response, Request } from 'express'
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { GetProductsUseCase } from "./GetProductsUseCase";

export class GetProductsController {

  async handle(request:Request, response:Response):Promise<Response>{
    const repository = new ProductsRepository()
    const useCase = new GetProductsUseCase(repository)
    const result = await useCase.execute()

    return response.status(200).json(result)
  }
}
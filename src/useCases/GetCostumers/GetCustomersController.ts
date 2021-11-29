import { Response, Request } from 'express'
import { CustomerRepository } from '../../repositories/implementations/CustomerRepository'
import { GetCustomersUseCase } from "./GetCostumersUseCase"

export class GetCustomersController {
  async handle(request: Request, response: Response): Promise<Response>{
    const filters = request.query
    console.log(filters)
    const repository = new CustomerRepository()
    const useCase = new GetCustomersUseCase(repository)
    const result =   await useCase.execute(filters)
    
    return response.status(200).json(result)  
  }


}
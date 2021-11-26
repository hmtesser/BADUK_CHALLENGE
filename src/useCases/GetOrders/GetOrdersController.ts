import { Response, Request } from 'express'
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'
import { GetOrdersUseCase } from './GetOrdersUseCase'

export class GetOrdersController {
  async handle(request:Request, response:Response):Promise<Response>{
    const filters = request.query
    const repository = new OrdersRepository()
    const useCase = new GetOrdersUseCase(repository)
    const result = await useCase.execute(filters)

    return response.status(200).json(result)
  }
}
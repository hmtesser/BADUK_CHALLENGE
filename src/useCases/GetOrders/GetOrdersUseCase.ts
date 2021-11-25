import { IOrdersRepository } from '../../repositories/IOrdersRepository'

export class GetOrdersUseCase {
  constructor(
    private orderRepository : IOrdersRepository
  ){}

  async execute(filters?:{}){
    const result = await this.orderRepository.find()
      return result
    
  }
}
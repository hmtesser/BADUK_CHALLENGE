import { IOrdersRepository } from '../../repositories/IOrdersRepository'

export class GetOrdersUseCase {
  constructor(
    private orderRepository : IOrdersRepository
  ){}

  async execute(filters?:{}){
    console.log(filters);
    const result = await this.orderRepository.find(filters)
      return result
    
  }
}
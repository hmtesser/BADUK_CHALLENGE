import { IProductsRepository } from "../../repositories/IProductsRepository"

export class GetProductsUseCase {
  constructor(
    private productsRepository : IProductsRepository
  ){}

  async execute(filters?:{}){
    const result = await this.productsRepository.find(filters)
    return result
  }

}
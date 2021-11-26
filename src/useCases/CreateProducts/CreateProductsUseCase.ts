import { CollectionProduct } from '../../entities/Products'
import { IProductsRepository } from '../../repositories/IProductsRepository'
import { ICreateProductsRequestDTO } from './CreateProductsDTO'

export class CreateProductsUseCase {

  constructor(
    private productsRepository : IProductsRepository
  ){}

  async execute(data:ICreateProductsRequestDTO){

    const products = new CollectionProduct(data)

    await this.productsRepository.save(products)

  }
}
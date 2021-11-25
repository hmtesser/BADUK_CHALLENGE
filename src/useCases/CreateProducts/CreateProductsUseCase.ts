import { Products } from '../../entities/Products'
import { IProductsRepository } from '../../repositories/IProductsRepository'
import { ICreateProductsRequestDTO } from './CreateProductsDTO'

export class CreateProductsUseCase {

  constructor(
    private productsRepository : IProductsRepository
  ){}

  async execute(data:ICreateProductsRequestDTO){
    const productAlreadyExists = await this.productsRepository.chkProductId(data.id)
    if(productAlreadyExists){
      throw new Error ('Cliente já cadastrado')
    }

    const products = new Products(data)

    await this.productsRepository.save(products)

  }
}
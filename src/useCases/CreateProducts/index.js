import { CreateProductsController } from './CreateProductsController'
import { ProductsRepository} from '../../repositories/implementations/ProductsRepository'
import { CreateProductsUseCase, createProductsController} from './CreateProductsUseCase'

const productsRepository = new ProductsRepository()

const createProductsUseCase = new CreateProductsUseCase(
  productsRepository
)
const createProductsController = new CreateProductsController (createProductsUseCase)

export { createProductsUseCase, createProductsController }

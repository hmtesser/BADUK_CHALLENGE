import { CreateProductsController } from './CreateProductsController'
import { PostgresProductsRepository} from '../../repositories/implementations/PostgresProductsRepository'
import { CreateProductsUseCase, createProductsController} from './CreateProductsUseCase'

const postgresProductsRepository = new PostgresProductsRepository()

const createProductsUseCase = new CreateProductsUseCase(
  postgresProductsRepository
)
const createProductsController = new CreateProductsController (createProductsUseCase)

export { createProductsUseCase, createProductsController }

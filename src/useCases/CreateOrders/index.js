import { CreateOrdersController } from './CreateOrdersController'
import { PostgresOrdersRepository } from "../../repositories/implementations/PostgresOrdersRepository"
import { CreateOrdersUseCase, createOrdersController } from './CreateOrdersUseCase'

const postgresOrdersRepository = new PostgresOrdersRepository()

const createOrdersUseCase = new CreateOrdersUseCase (
  postgresOrdersRepository
)

const createOrdersController = new CreateOrdersController (createOrdersUseCase)

export { createOrdersController, createOrdersUseCase }
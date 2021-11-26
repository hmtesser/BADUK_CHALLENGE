import { CreateOrdersController } from './CreateOrdersController'
import { CreateOrdersUseCase, createOrdersController } from './CreateOrdersUseCase'
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'

const ordersRepository = new OrdersRepository()

const createOrdersUseCase = new CreateOrdersUseCase (
  ordersRepository
)

const createOrdersController = new CreateOrdersController (createOrdersUseCase)

export { createOrdersController, createOrdersUseCase }
import { CreateCustomerController } from './CreateCustomerController'
import { PostgresCustomerRepository } from "../../repositories/implementations/PostgresCustomersRepository"
import { CreateCustomerUseCase, createCustomerController } from './CreateCustomerUseCase'

const postgresCustomersRepository = new PostgresCustomerRepository()

const createCustomerUseCase = new CreateCustomerUseCase (
  postgresCustomersRepository
)

const createCustomerController = new CreateCustomerController (createCustomerUseCase)

export { createCustomerController, createCustomerUseCase }
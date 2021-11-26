import { CreateCustomerController } from './CreateCustomerController'
import { CustomerRepository } from '../../repositories/implementations/CustomerRepository'
import { CreateCustomerUseCase, createCustomerController } from './CreateCustomerUseCase'

const customersRepository = new CustomerRepository()

const createCustomerUseCase = new CreateCustomerUseCase (
  customersRepository
  )

const createCustomerController = new CreateCustomerController (createCustomerUseCase)

export { createCustomerController, createCustomerUseCase }
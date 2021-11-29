import { CreateCustomerController } from './CreateCustomerController'
import { CustomerRepository } from '../../repositories/implementations/CustomerRepository'
import { CreateCustomerUseCase} from './CreateCustomerUseCase'

const customersRepository = new CustomerRepository()

const createCustomerUseCase = new CreateCustomerUseCase (
  customersRepository
  )

const createCustomerController = new CreateCustomerController ()

export { createCustomerController, createCustomerUseCase }
import { CollectionCustomer } from "../../entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { ICreateCustomerRequestDTO } from "./CreateCustomerDTO";

export class CreateCustomerUseCase {
  
  constructor(
    private customerRepository: ICustomerRepository

  ){}
  
  async execute(data: ICreateCustomerRequestDTO) {

  const customer = new CollectionCustomer(data)

  await this.customerRepository.save(customer);

   return 


  }
}
import { ICustomerRepository } from "../../repositories/ICustomerRepository"
export class GetCustomersUseCase {
 
  constructor(
    private customerRepository: ICustomerRepository
  ){}

    async execute(filters?:{}){
      const result =  await this.customerRepository.find()
      return result;
    }

}
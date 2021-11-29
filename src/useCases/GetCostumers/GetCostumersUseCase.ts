import { ICustomerRepository } from "../../repositories/ICustomerRepository"
export class GetCustomersUseCase {
 
  constructor(
    private customerRepository: ICustomerRepository
  ){}

    async execute(filters?:{}){
      console.log(filters);
      const result =  await this.customerRepository.find(filters)
      return result;
    }

}
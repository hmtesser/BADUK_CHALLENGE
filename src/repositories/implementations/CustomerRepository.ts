import { Customer } from "../../entities/Customer"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"
import { collections } from "../../services/database.service"


export class CustomerRepository implements ICustomerRepository {

  private customers = collections.customers



  async save(customer: Customer){
    this.customers.insertOne(customer);
  }
  async find(){
    const result = await this.customers.find().toArray()
    return  result
  }
}
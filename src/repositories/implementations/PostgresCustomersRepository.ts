import { Customer } from "../../entities/Customer"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"


export class PostgresCustomerRepository implements ICustomerRepository {

  private customers: Customer[] = [];

  async chkCustomerId(id: string): Promise<Customer> {
    const customer = this.customers.find(customer => customer.id === id);
    return customer;
  }

  async save(customer: Customer){
    this.customers.push(customer);
  }
}
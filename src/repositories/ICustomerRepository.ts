import { Customer } from "../models/Customer";
  export interface ICustomerRepository {
    save(customer:Customer):Promise<void>
    find():Promise<Customer[]>
    findOne(id:string):Promise<Customer | undefined>
  }

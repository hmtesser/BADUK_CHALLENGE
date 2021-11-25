import { Customer } from "../entities/Customer";
  export interface ICustomerRepository {
    save(customer:Customer):Promise<void>
    find():Promise<void>
  }

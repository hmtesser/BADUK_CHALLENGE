import { Customer } from "../entities/Customer";
  export interface ICustomerRepository {
    chkCustomerId(id:string): Promise<Customer>;
    save(customer:Customer):Promise<void>
  }

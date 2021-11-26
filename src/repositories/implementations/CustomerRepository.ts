import { ObjectId } from "bson";
import { Customer } from "../../models/Customer"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"
import { collections } from "../../services/database.service"


export class CustomerRepository implements ICustomerRepository {

  private customers = collections.customers



  async save(customer: Customer){
    this.customers.insertOne(customer);
  }
  async find(filters?: Partial<Customer> & {
    start?:Date | string
    end?:Date | string
    pageNumber?:number
    itensPerPage?:number
  }){
    console.log(filters)

    const result = await this.customers.find().skip(filters.pageNumber > 0 ? (( filters.pageNumber -1) * filters.itensPerPage):0).toArray()
    return result as unknown as Customer[]
  }

  async findOne(id:string){
    const result = await this.customers.find({_id: new ObjectId(id)}).toArray()
    return result as unknown as Customer
  }
}
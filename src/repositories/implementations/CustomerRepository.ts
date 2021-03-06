
import { ObjectId } from "mongoose/node_modules/mongodb"
import { Customer } from "../../models/Customer"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"
import { collections } from "../../services/database.service"


export class CustomerRepository implements ICustomerRepository {

  private customers = collections.customers

//queries used for Customers

  async save(customer: Customer){
    this.customers.insertOne(customer)
  }
  async find(filters?: Partial<Customer> & {
    start?:Date | string
    end?:Date | string
    pageNumber?:number
    itensPerPage?:number
  }){

    console.log('filtros: ',filters)
    const obj = {
      ...filters
    }
    
    
    if (Object.keys(filters).length === 0){
      const result = await this.customers.find().toArray()
      return result as unknown as Customer[]
    }
   
    const result = await this.customers.find(obj).toArray()
    return result as unknown as Customer[]

  

  }

  async findOne(id:string){
    const result = await this.customers.find({_id: new ObjectId(id)}).toArray()
    return result as unknown as Customer
  }
}
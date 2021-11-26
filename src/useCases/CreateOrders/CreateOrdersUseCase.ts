import { AppError } from "../../app";
import  { CollectionOrder } from "../../entities/Orders";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { ICreateOrdersRequestDTO } from "../CreateOrders/CreateOrdersDTO";

export class CreateOrdersUseCase {


  constructor(
    private orderRepository: IOrdersRepository,
    private productRepository:IProductsRepository,
    private customerRepository:ICustomerRepository

  ){}
  
  async execute(data: ICreateOrdersRequestDTO) {
  
    let totalPrice = 0

    const findCustomer = await this.customerRepository.findOne(data.customerId)
    if(!findCustomer){
      throw  new AppError("Customer not registered")
    }

    for (const product of data.products) {
      const findProduct = await this.productRepository.findOne(product.id)
      if(findProduct?.quantity >= product.quantity){
        totalPrice = totalPrice + product.quantity*findProduct.price
        continue;
      }

      throw new AppError(`Product ${product.id} not available`)
      
    }
    const orders = new CollectionOrder({...data, totalPrice}) 
    await this.orderRepository.save(orders)

    for (const product of data.products) {
      const findProduct = await this.productRepository.findOne(product.id)
      const totalPriceResult = findProduct.quantity - product.quantity
      await this.productRepository.update(product.id,{quantity:totalPriceResult})      
    }


    
    return
  


  }
}



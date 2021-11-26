import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { Request, Response } from "express"
import { CustomerRepository } from "../../repositories/implementations/CustomerRepository";


export class CreateCustomerController {


  async handle(request: Request, response: Response): Promise<Response> {

    const { name, email, telefone, updatedAt = new Date(), createdAt = new Date()} = request.body;
    //Database insetion
    const repository = new CustomerRepository()
    const useCase = new CreateCustomerUseCase(repository)
    await useCase.execute({name, email, telefone,updatedAt, createdAt})
    return response.json({message: "Customer inserted into databank succesfully"})
    
  }

}


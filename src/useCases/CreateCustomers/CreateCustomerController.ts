import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { Request, Response } from "express"
import { CustomerRepository } from "../../repositories/implementations/CustomerRepository";


export class CreateCustomerController {


  async handle(request: Request, response: Response): Promise<Response> {

    const { name, email, telefone } = request.body;
    //Database insetion
    const repository = new CustomerRepository()
    const useCase = new CreateCustomerUseCase(repository)
    await useCase.execute({name, email, telefone})
    return response.json({message: "Customer inserted into databank succesfully"})
    
  }

}


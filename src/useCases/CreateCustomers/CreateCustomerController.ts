import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { collections } from "../../services/database.service"

import { Request, Response } from "express"
import { Customer } from "../../entities/Customer";

export class CreateCustomerController {
  constructor(
    private createCustomerUseCase: CreateCustomerUseCase
  ) { }


  //E-mail validation
  isValidEmail(email) {
    const rawEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = rawEmail.test(String(email).toLowerCase());
    return valid;
  
  }
  //Telephone validation
  isValidNumber(number) {

    const rawNumber = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm
    const valid = rawNumber.test(String(number).toLowerCase())
    return valid;
  }

  async handle(request: Request, response: Response): Promise<Response> {
 
    //const { name, email, telefone } = request.body;
    const name =""
    const email =""
    const telefone = ""
    console.log(request.body);                                                                        


    //insertion into database
    try {  
      
  
      
      if (!this.isValidEmail(email)) {      
        return response.status(400).json({ message: "Incorrect e-mail format" })
      } else if (!this.isValidNumber(telefone)) {
        return response.status(400).json({ message: "Incorrect telephone number" })
      } else {
        return response.status(201).send('foi');     
      }

    } catch (err) {
      return response.status(400).json({ message: err.message || 'Erro inesperado' })
    }
  }

}


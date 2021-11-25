
import express, {Request, Response,Router } from "express"
import { createCustomerController } from './useCases/CreateCustomers/'
import { createOrdersController } from './useCases/CreateOrders/'
import { createProductsController } from'./useCases/CreateProducts'
import { GetCustomersController } from "./useCases/GetCostumers/GetCustomersController";
import { GetOrdersController } from "./useCases/GetOrders/GetOrdersController"
import { celebrate, Joi, Segments } from "celebrate";
import { GetProductsController } from "./useCases/GetProducts/GetProductsController";


//Global Config
const router = Router();
router.use(express.json())

// rotas utilizadass

//Customers

router.post('/customers', celebrate({[Segments.BODY]:
  Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+?[a-zA-Z]{2}))/).required(),
    telefone:Joi.string().regex(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\)?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/).rule({
      message: "Wrong telephone format"
    }).required()
  })
}),  (req, res) => {

return createCustomerController.handle(req, res)
});
// Products 
router.post('/products',(req,res) => {

return createProductsController.handle(req, res)
})

//Orders

router.post('/orders', (req,res) => {
  return createOrdersController.handle(req,res)
})


router.get('/customers', (req, res) => {
  return new GetCustomersController().handle(req,res)
  res.status(200).json({message:'rsrslol'})
})

router.get('/products',(req,res) => {
return new GetProductsController().handle(req,res)
})

router.get('/orders', (req, res) => {
return new GetOrdersController().handle(req,res)

})


export { router }
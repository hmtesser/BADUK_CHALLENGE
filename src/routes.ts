import { ObjectId } from "mongodb";
import { collections } from "./services/database.service";
import express, {Request, Response,Router } from "express"
import { createCustomerController } from './useCases/CreateCustomers/'
import { createOrdersController } from './useCases/CreateOrders/'

//Global Config
const router = Router();
router.use(express.json())

// rotas utilizadass

//Customers

router.post('/customers', (req, res) => {

 //  res.status(200).json({message: "enatrou"})
return createCustomerController.handle(req, res)
});
// Products 
router.post('/products',(req,res) => {
  res.status(200).json({message: "entsrou"})
//  return createProductsController.handle(req, res)
})

//Orders

router.post('/orders', (req,res) => {
  return createOrdersController.handle(req,res)
})


router.get('/customers', (req, res) => {
  res.status(200).json({message:'rsrslol'})
})

router.get('/products',(req,res) => {
  res.status(200).json({message:'rsrslololrs'})
})

router.get('/orders', (req, res) => {
  res.status(200).json({message:'swain agora go'})
})


export { router }
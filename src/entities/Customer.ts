import mongoose, { Schema } from "mongoose"
import { Customer } from "../models/Customer"

const customers = new Schema<Customer>({
 name:{
   type:String,
   required:true
 },
 email:{
   type:String,
   required:true
 },
 telephone:{
   type:String,
   required:true
 }
  
}, {timestamps:true})

const CollectionCustomer = mongoose.model("customer",customers)

export { CollectionCustomer }
import mongoose,{ Schema } from "mongoose"
import { Product } from "../models/Product"

//schema for Mongo 
const products = new Schema<Product>({
   name:{
     type:String,
     required:true
   },
   price:{
     type:Number,
     required:true
   },
   quantity:{
     type:Number,
     required:true
   },
},{
  timestamps:true
})

const CollectionProduct = mongoose.model("products",products)

export { CollectionProduct }
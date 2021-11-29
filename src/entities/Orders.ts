import mongoose, { Schema } from "mongoose"
import { Order } from '../models/Order'

const orders = new Schema<Order>({
  customerId: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  products: [{
    id: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    _id: false
  }],
},
  { timestamps: true })

const CollectionOrder = mongoose.model("orders", orders)
export { CollectionOrder }

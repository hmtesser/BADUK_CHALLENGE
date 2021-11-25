import * as mongoDB from "mongodb";

// External Dependencies

// Global Variables

export const collections: {
customers?: mongoDB.Collection
orders?:mongoDB.Collection,
products?:mongoDB.Collection
} = {}

// Initialize Connection

export async function connectDataBase () {

  const urlString:string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@baduk.er4kc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(urlString)

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const customersCollection: mongoDB.Collection = db.collection("customers")
  const ordersCollection: mongoDB.Collection = db.collection("orders")
  const productsCollection: mongoDB.Collection = db.collection("products")

  collections.customers = customersCollection;
  collections.orders = ordersCollection;
  collections.products = productsCollection

}
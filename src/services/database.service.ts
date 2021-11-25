import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// External Dependencies

// Global Variables

export const collections: {customers?: mongoDB.Collection} = {}

// Initialize Connection

export async function connectDataBase () {
  dotenv.config();
  const urlString:string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@baduk.er4kc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(urlString);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const customersCollection: mongoDB.Collection = db.collection(process.env.CUSTOMERS_COLLECTION);

  collections.customers = customersCollection;

console.log(`Conectado no banco de dados ${db.databaseName}, no banco ${customersCollection.collectionName}`)

}
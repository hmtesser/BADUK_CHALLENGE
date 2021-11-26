import { app } from "./app";
import express from "express"
import { connectDataBase } from './services/database.service'
import { router } from "./routes"

//check connection with mongoDB
connectDataBase().then(() => {
  app.use("/customers",router);

  app.listen(3000, () => {
    console.log(`Server started at http://localhost:${3000}`)
});
  }).catch((error:Error) => {
    console.error("Database connection failed")
    process.exit();
  })
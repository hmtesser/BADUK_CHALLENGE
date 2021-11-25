import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor (message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

app.use((err: any, _request: express.Request, response: express.Response, _: express.NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: 'error', message: err.message })
  }

  console.log(err)

  return response.status(500).json({ status: 'error', message: 'Erro interno do servidor.' })
})


export { app } 
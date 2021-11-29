import 'express-async-errors'
import { isCelebrateError } from 'celebrate'
import express from 'express'
import { router } from './routes'
import dotenv from 'dotenv'



dotenv.config()
const app = express()

app.use(express.json())
app.use(router)

export class AppError {
  public readonly message: string

  public readonly statusCode: number

  constructor (message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

app.use((err: any, _request: express.Request, response: express.Response, _: express.NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: 'error', message: err.message })
  }

  if (isCelebrateError(err)) {
    const queryMessage = err.details.get('query')?.message
    const bodyMessage = err.details.get('body')?.message
    return response.status(401).json({
      status: 'error',
      message: queryMessage || bodyMessage,
    })
  }
    return response.status(500).json({ status: 'error', message: 'Erro interno do servidor.' })

  
})


export { app } 
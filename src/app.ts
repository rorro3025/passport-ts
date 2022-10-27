import express from 'express'
import morgan from 'morgan'
import userRoute from './routes/users.routes'
import * as dotenv from 'dotenv'
import './database'

dotenv.config()
const app = express()

// config 
app.set('port', process.env.PORT || 4000)

// middleware 
app.use(morgan('dev'))

// routes 

app.use('/api', userRoute)

export default app


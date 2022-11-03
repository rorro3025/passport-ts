import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
dotenv.config()
import './database'
import userRouter from './routes/users.routes'
import trackRouter from './routes/tracks.routes'

const app = express()

// config 
app.set('port', process.env.PORT || 4000)

// middleware 
app.use(morgan('dev'))

// user routes 
app.use('/api/users', userRouter)
// track routes
app.use('/api/tracks', trackRouter)

export default app


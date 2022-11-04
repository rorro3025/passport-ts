import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()
import './database'
import userRouter from './routes/users.routes'
import trackRouter from './routes/tracks.routes'
import storageRoute from './routes/storage.routes'
import './routes/list'

const app = express()

// config 
app.set('port', process.env.PORT || 4000)

// middleware 
app.use(morgan('dev'))
app.use(bodyParser.json())

// user routes 
app.use('/api/users', userRouter)
// track routes
app.use('/api/tracks', trackRouter)
// storage routes
app.use('/api/storage', storageRoute)

export default app


import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import './database'
import './routes/list'
import userRouter from './routes/users.routes'
import trackRouter from './routes/tracks.routes'
import storageRoute from './routes/storage.routes'
import path from 'path'

const app = express()

// config 
app.set('port', process.env.PORT || 4000)

// middleware 
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'storage')))
app.use(express.static('public'))

// user routes 
app.use('/api/users', userRouter)
// track routes
app.use('/api/tracks', trackRouter)
// storage routes
app.use('/api/storage', storageRoute)

export default app


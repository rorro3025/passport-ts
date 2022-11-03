import { Router } from 'express'
import { getAll, saveOne } from '../controllers/track.controllers'

const trackRouter = Router()

trackRouter.get('/', getAll)
trackRouter.post('/', saveOne)

export default trackRouter



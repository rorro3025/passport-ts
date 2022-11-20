import { Router } from 'express'
import { getAll, saveOne, getOne, deleteOne, updateOne } from '../controllers/track.controllers'
import { validateTrackCreating, validateMongoId } from '../validators/tracks'

const trackRouter = Router()

trackRouter.get('/', getAll)
trackRouter.post('/', validateTrackCreating, saveOne)
trackRouter.get('/:id', validateMongoId, getOne)
trackRouter.put('/:id', validateTrackCreating, validateMongoId, updateOne)
trackRouter.delete('/:id', validateMongoId, deleteOne)


export default trackRouter



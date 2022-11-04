import { Router } from 'express'
import { getAll, saveOne } from '../controllers/storage.controllers'

const storageRoute = Router()

storageRoute.get('/', getAll)
storageRoute.post('/', saveOne)

export default storageRoute


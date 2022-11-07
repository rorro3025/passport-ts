import { Router } from 'express'
import { getAll, saveOne } from '../controllers/storage.controllers'
import uploadFile from '../config/files'

const storageRoute = Router()

storageRoute.get('/', getAll)
storageRoute.post('/', uploadFile.single('avatar'), saveOne)

export default storageRoute


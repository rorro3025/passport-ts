import { Router } from 'express'
import { getAll, saveOne, getOne } from '../controllers/user.controllers'
import checkUser from '../middleware/custom'

const users = Router()

users.get('/', checkUser, getAll)
users.get('/:email', getOne)
users.post('/', saveOne)

export default users;

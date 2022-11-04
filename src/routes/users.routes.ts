import { Router } from 'express'
import { getAll, saveOne, getOne } from '../controllers/user.controllers'

const users = Router()

users.get('/', getAll)
users.get('/:email', getOne)
users.post('/', saveOne)

export default users;

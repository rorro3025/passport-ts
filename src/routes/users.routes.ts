import { Router } from 'express'
import { getAll, saveOne } from '../controllers/user.controllers'

const users = Router()

users.get('/', getAll)
users.post('/', saveOne)

export default users;

import { Request, Response } from 'express'
import userModel from '../models/user.model'

export async function getAll(_req: Request, res: Response) {
  let respone = await userModel.find()
  res.send(respone)
}

export async function saveOne(_req: Request, res: Response) {
  let user = new userModel({
    username: 'abbyHer',
    email: 'abbybb@mail.com',
    password: 'password1',
    permissions: ['read', 'writte'],
  })
  await user.save()
  res.send(user.email)
}


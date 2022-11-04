import { Request, Response } from 'express'
import userModel from '../models/user.model'

export async function getAll(_req: Request, res: Response) {
  let respone = await userModel.find()
  res.send(respone)
}

export async function getOne(req: Request, res: Response) {
  let { email } = req.params
  console.log(email)
  let respone = await userModel.findById(email)
  res.send(respone)
}

export async function saveOne(req: Request, res: Response) {
  let data = req.body
  console.log(data)
  let user = new userModel({ ...data })
  await user.save()
  res.send(user.email)
}


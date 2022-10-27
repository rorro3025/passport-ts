import { Router, Request, Response } from 'express'

const users = Router()

users.get('/users', (_req: Request, res: Response) => {
  console.log('users route')
  res.json({ name: 'sandra bb' })
})

export default users;

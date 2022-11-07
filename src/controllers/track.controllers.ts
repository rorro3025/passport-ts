import { Request, Response } from 'express'
import trackModel from '../models/track.model'

export async function getAll(_req: Request, res: Response) {
  let response = await trackModel.find()
  res.send(response)
}

export async function saveOne(req: Request, res: Response) {
  let track = req.body

  let data = new trackModel({ ...track })
  await data.save()

  res.json(`added to ${data.album}`)
}

import { Request, Response } from 'express'
import storageModel from '../models/storage.model'

export async function getAll(_req: Request, res: Response) {
  let response = await storageModel.find()
  res.send(response)
}

export async function saveOne(_req: Request, res: Response) {
  let data = new storageModel({
    url: 'music/url',
    filename: 'tetris_rap.mp3'
  })
  await data.save()
  res.send(data.id)
}


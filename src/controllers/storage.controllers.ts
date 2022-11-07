import { Request, Response } from 'express'
import storageModel from '../models/storage.model'

export async function getAll(_req: Request, res: Response) {
  let response = await storageModel.find()
  res.send(response)
}

export async function saveOne(req: Request, res: Response) {
  const { file } = req
  let data = new storageModel({
    url: `http://localhost:3040/${file?.filename}`,
    filename: file?.filename
  })
  await data.save()
  res.send(data.id)
}


import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { handleError } from '../utils'
import trackModel from '../models/track.model'

export async function getAll(_req: Request, res: Response) {
  try {
    let response = await trackModel.find()
    res.send(response)
  } catch (error) {
    handleError(res)
  }
}

export async function saveOne(req: Request, res: Response) {
  try {
    let track = matchedData(req)
    let data = new trackModel(track)
    await data.save()
    res.json(`added to ${data.album}`)
  } catch (error) {
    handleError(res)
  }
}

export async function getOne(req: Request, res: Response) {
  try {
    const { id } = matchedData(req)
    let data = await trackModel.findById(id)
    res.status(200).send(data)
  } catch (error) {
    handleError(res)
  }
}

export async function updateOne(req: Request, res: Response) {
  try {
    const { id, ...body } = matchedData(req)
    let data = await trackModel.findOneAndUpdate(id, body)
    res.status(200).json({ message: "deleted", name: data?.name })
  } catch (error) {
    handleError(res)
  }
}

export async function deleteOne(req: Request, res: Response) {
  try {
    const { id } = matchedData(req)
    let data = await trackModel.deleteOne(id)
    res.status(200).json({ message: "deleted", ...data })
  } catch (error) {
    handleError(res)
  }
}

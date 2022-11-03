import { Request, Response } from 'express'
import trackModel from '../models/track.model'

export async function getAll(_req: Request, res: Response) {
  let response = await trackModel.find()
  res.send(response)
}

export async function saveOne(_req: Request, res: Response) {
  let data = new trackModel({
    name: 'Tetris rap',
    album: 'No es cuestion de edades',
    cover: 'url/image',
    duration: {
      start: 0.0,
      end: 1.53
    },
    artist: {
      name: 'Chistian',
      nickname: 'Porta',
      nationality: 'Spanish'
    }
  })
  data.save()

  res.json(`added to ${data.album}`)
}

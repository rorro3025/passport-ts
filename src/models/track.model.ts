import { Schema, model } from 'mongoose'
import { ITrack } from './interfaces'


const trackSchema = new Schema<ITrack>({
  name: { type: String },
  album: { type: String },
  duration: { start: Number, end: Number },
  cover: {
    type: String,
    validate: {
      validator: (req: any) => {
        return true
      },
      message: 'URL ERROR'
    },
  },
  artist: {
    name: String,
    nickname: String,
    nationality: String
  }
},
  {
    timestamps: true,
    versionKey: false
  })

const trackModel = model<ITrack>('tracks', trackSchema)

export default trackModel

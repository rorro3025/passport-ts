import { Schema, model } from 'mongoose'
import { IStorage } from './interfaces'

const storageModel = new Schema<IStorage>({
  url: { type: String, trim: true },
  filename: String
},
  {
    timestamps: true,
    versionKey: false
  })

export default model<IStorage>('storage', storageModel)

import { Types } from 'mongoose'

export interface IUser {
  id?: string
  username: string
  email: string
  password?: string
  permissions: Types.Array<string>
  role?: 'normal' | 'admin'
  createdAt: string
}

interface Artist {
  name: string
  nickname: string
  nationality: string
}

interface Duration {
  start: number
  end: number
}
export interface ITrack {
  name: string
  album: string
  artist: Artist
  cover: string
  duration: Duration
  mediaId?: Types.ObjectId
  createdAt: string
}

export interface IStorage {
  url: string
  filename: string
  createdAt: string
}

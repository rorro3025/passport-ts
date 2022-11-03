import { Schema, model } from 'mongoose'
import { IUser } from './interfaces'

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  permissions: [String],
  role: { type: String, default: 'normal' }
}, {
  timestamps: true,
  versionKey: false
})

const userModel = model<IUser>('users', userSchema)
export default userModel


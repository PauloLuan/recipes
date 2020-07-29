import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
})

export default mongoose.model<IUser>('User', UserSchema)

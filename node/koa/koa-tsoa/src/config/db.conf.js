import mongoose from '@src/user/node_modules/mongoose'

export default class DBConfig {
  static init () {
    mongoose.connect(process.env.MONGODB_URI)
    mongoose.connection.on('error', err => {
      console.error(`MongoDB connection error: ${err}`)
      process.exit(-1)
    })
  }
}

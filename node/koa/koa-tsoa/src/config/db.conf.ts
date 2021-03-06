import mongoose from 'mongoose'

export default class DBConfig {
  static init () {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    mongoose.connection.on('error', err => {
      console.error(`MongoDB connection error: ${err}`)
      process.exit(-1)
    })
  }
}

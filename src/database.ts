import mongoose from "mongoose";
import config from './config/config'

const { URL } = config.DB
const url = process.env.MONGO_URL || URL
mongoose.connect(url)
console.log(url)

let connection = mongoose.connection

connection.once('open', () => console.log('mongo connection succesful'))

connection.on('error', err => {
  console.error(err)
  process.exit(0)
})

export default connection

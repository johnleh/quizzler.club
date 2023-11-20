import { MongoClient } from 'mongodb'


const username =  process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const uriEnd = process.env.MONGODB_URI_END

if (!username) {throw new Error('Please add your Mongo username to .env.local')}
if (!password) {throw new Error('Please add your Mongo password to .env.local')}
if (!uriEnd) {throw new Error('Please add your Mongo uriEnd to .env.local')}

const uri = 'mongodb+srv://'+username+':'+password+'@'+uriEnd
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

export const mongoOptions = {
  databaseName: 'quizzler_data',
}
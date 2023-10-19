import { MongoClient, ObjectId } from 'mongodb'

Action().then().catch()

async function Action () {
    const client = new MongoClient('mongodb://127.0.0.1:27017/?authSource=admin')
    await client.connect()
    let mongoClient =  client.db('russian-cities-mongodb')
    let collection = mongoClient.collection('user')


}


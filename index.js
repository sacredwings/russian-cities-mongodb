import { MongoClient, ObjectId } from 'mongodb'
import Cities from './russian-cities.json'

Action().then().catch()

async function Action () {
    const client = new MongoClient('mongodb://127.0.0.1:27017/?authSource=admin')
    await client.connect()
    let mongoClient =  client.db('russian-cities-mongodb')
    let collectionSubject = mongoClient.collection('subject')
    let collectionCity = mongoClient.collection('city')

    for (let item of Cities) {

        let subject = await collectionSubject.findOne({name: item.subject})
        if (!subject) {
            subject = {
                name: item.subject
            }
            await collectionSubject.insertOne(subject)
        }

        let city = await collectionCity.findOne({name: item.name, subject: item.subject})
        if (!city) {
            item.subject_id = subject._id
            await collectionCity.insertOne(item)
        }

    }

    console.log('Готово')
}


const mongodb = require('mongodb');
const config = require('../config');

const uri = 'mongodb+srv://root:<password>@clusterapi.ysusifg.mongodb.net/';

class MongoDB {
    constructor() {
        this.client = new mongodb.MongoClient(uri, {
            serverApi: {
                version: 'serverApiVersion', // Replace with the actual version
                strict: true
            }
        });
    }

    async connect() {
        return await this.client.connect();
    }

    async getAll(database, collectionName) {
        const db = this.client.db(database);
        const collection = db.collection(collectionName);

        const users = await collection.find().toArray();

        return users;
    }
}

module.exports = MongoDB;

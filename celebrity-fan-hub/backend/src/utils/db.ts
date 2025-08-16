import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

async function getUsers() {
    const database = client.db('celebrityFanHub');
    const users = database.collection('users');
    return await users.find({}).toArray();
}

async function getCelebrities() {
    const database = client.db('celebrityFanHub');
    const celebrities = database.collection('celebrities');
    return await celebrities.find({}).toArray();
}

export { connectDB, getUsers, getCelebrities };
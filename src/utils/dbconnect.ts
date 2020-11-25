/* eslint-disable no-console */
import mongoose from 'mongoose';

const db = mongoose.connection;

const dbHost = process.env.DB_HOST || 'localhost:27017';

mongoose.connect(dbHost, { useNewUrlParser: true });

db.once('open', () => {
    console.log('Connected to db!');
});

db.on('error', () => {
    console.log('Error connecting to db');
});

export default db;
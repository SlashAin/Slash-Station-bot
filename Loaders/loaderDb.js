const { MongoClient } = require('mongodb');
const config = require('../config.json');

module.exports = async () => {
    const db = await MongoClient.connect(config.mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return db;
};
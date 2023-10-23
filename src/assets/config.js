require('dotenv').config();

const config ={
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env
}

module.exports = config;
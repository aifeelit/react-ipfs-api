const mongoose = require('mongoose');
const logger = require('./logger');
const { DB, ENVIRONMENT } = require('./config');

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

let url = '';

if (ENVIRONMENT !== 'development') {
  url = `mongodb://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOSTNAME}:${DB.PORT}/${DB.NAME}?authSource=admin`;
} else {
  url = 'mongodb://localhost/test';
}

async function initializeConnection() {
  console.log('Initializing connection: ', url);
  return mongoose
    .connect(url, options)
    .then(() => {
      logger.info('MongoDB is connected');
    })
    .catch((err) => {
      logger.error(`Error: ${err}`);
    });
}

const db = mongoose.connection;

module.exports = { initializeConnection, db };

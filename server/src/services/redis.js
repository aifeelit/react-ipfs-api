const redis = require("redis");
const config = require('../config');
const { promisify } = require("util");
const client = redis.createClient({
  port: config.REDIS_PORT
});

module.exports = {
    ...client,
    getAsync : promisify(client.hget).bind(client), 
    setAsync : promisify(client.set).bind(client),
    renameAsync: promisify(client.rename).bind(client),
    keysAsync : promisify(client.keys).bind(client)
};

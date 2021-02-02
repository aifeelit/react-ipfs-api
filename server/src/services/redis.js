const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient();

module.exports = {
    ...client,
    getAsync : promisify(client.hget).bind(client),
    hgetAllAsync : promisify(client.hgetall).bind(client),   
    setAsync : promisify(client.set).bind(client),
    keysAsync : promisify(client.keys).bind(client)
};

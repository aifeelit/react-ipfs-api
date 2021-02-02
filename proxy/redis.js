const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient();

module.exports = {
    ...client,
    getAsync : promisify(client.get).bind(client),
    setAsync : promisify(client.set).bind(client),
};

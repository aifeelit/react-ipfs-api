module.exports = {
    ENVIRONMENT: process.env.ENVIRONMENT || 'development',
    PROXY_URL: process.env.PROXY_URL || 'http://localhost:3000',
    IPFS_URL: process.env.IPFS_URL || 'http://localhost:5001',
    NODE_APP: process.env.NODE_APP || 'http://localhost:3000',
    DB: {
        USERNAME: process.env.MONGO_USERNAME,
        PASSWORD: process.env.MONGO_PASSWORD,
        HOSTNAME: process.env.MONGO_HOSTNAME,
        PORT: process.env.MONGO_PORT,
        NAME: process.env.MONGO_DB,
    },
};
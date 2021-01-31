const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

module.exports = {
  ENVIRONMENT,
  IPFS: {
    PORT: process.env.IPFS_PORT || '5001',
    HOST: process.env.IPFS_HOST || 'localhost',
    PROTOCOL: process.env.IPFS_PROTOCOL || 'http',
  },
  APP: {
    PORT: process.env.APP_PORT || 8080,
  },
  DB: {
    USERNAME: process.env.MONGO_USERNAME || 'fleek',
    PASSWORD: process.env.MONGO_PASSWORD || 'fleek',
    HOSTNAME: process.env.MONGO_HOSTNAME || '127.0.0.1',
    PORT: process.env.MONGO_PORT || '27017',
    NAME: process.env.MONGO_DB || 'fleek',
  },
};

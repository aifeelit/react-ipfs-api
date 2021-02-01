const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

module.exports = {
  ENVIRONMENT,
  IPFS: {
    PORT: process.env.IPFS_PORT || '5001',
    HOST: process.env.IPFS_HOST || 'localhost',
    PROTOCOL: process.env.IPFS_PROTOCOL || 'http',
  },
  APP: {
    PORT: process.env.APP_PORT || 3000,
  },
  DB: {
    USERNAME: process.env.MONGO_USERNAME,
    PASSWORD: process.env.MONGO_PASSWORD,
    HOSTNAME: process.env.MONGO_HOSTNAME,
    PORT: process.env.MONGO_PORT,
    NAME: process.env.MONGO_DB,
  },
};

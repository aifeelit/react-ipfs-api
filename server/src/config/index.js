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
  REDIS_PORT: process.env.REDIS_PORT || 6379
};

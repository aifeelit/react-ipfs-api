const createIPFSClient = require('ipfs-http-client');

const IPFS = createIPFSClient({
  host: config.IPFS.HOST,
  port: config.IPFS.PORT,
  protocol: config.IPFS.PROTOCOL,
});

module.exports = IPFS;

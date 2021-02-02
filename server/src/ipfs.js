const createIPFSClient = require('ipfs-http-client');
const ipfsConfig = require('./config').IPFS;

const IPFS = createIPFSClient({
  host: ipfsConfig.HOST,
  port: ipfsConfig.PORT,
  protocol: ipfsConfig.PROTOCOL,
});

module.exports = IPFS;

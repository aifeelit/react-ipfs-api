const createIPFSClient = require('ipfs-http-client');
const ipfsConfig = require('./config').IPFS;

console.log('IPFS CONFIG: ', ipfsConfig);

const IPFS = createIPFSClient({
  host: ipfsConfig.HOST,
  port: ipfsConfig.PORT,
  protocol: ipfsConfig.PROTOCOL,
});

console.log('IPFS: ', IPFS);

module.exports = IPFS;

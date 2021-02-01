const IPFS = require('../ipfs');
const logger = require('../logger');

const buildPublicGatewayURL = hash => `https://gateway.ipfs.io/ipfs/${hash}`;

const retrieveHashFromFile = file => {
  const { cid } = file;
  const hash = cid.toString();
  return hash;
};

async function addFile(name, text){
  const newFile = { path: name, content: Buffer.from(text) };
  const filesAdded = await IPFS.add(newFile);
  return filesAdded;
};

exports.post = async (req, res) => {
  try {
    const { name, text } = req.body;
    const addedFile = await addFile(name, text);
    const fileHash = retrieveHashFromFile(addedFile);
    const link = buildPublicGatewayURL(fileHash);
    return res.json({ data: link });
  } catch(error) {
    logger.error(`Error: ${error}`);
    return res.status(500).send(error);
  }
};
const logger = require('../logger');
const redis = require('../services/redis');
const { generateKey } = require('../utils/generator');

exports.getAll = async (req, res) => {
  try {
    let data = await redis.keysAsync('key *');
    console.log('data: ', data);
    return res.json({ data });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

exports.getOne = async (req, res) => {
  const apiKey = req.headers['x-ipfs-auth'];
  const keyIdentifier = `key ${apiKey}`;
  let data = await redis.getAsync(keyIdentifier);
  data = JSON.parse(data);
  // console.log('typeof data: ',typeof data);
  // console.log('DATA: ', data);
  res.json(data);
}

exports.addNew = async (req, res) => {
  const { apiKey } = generateKey();
  try {
    const keyIdentifier = `key ${apiKey} true`;
    await redis.setAsync(keyIdentifier, true);
    logger.info('Key created correctly.');
    return res.json({ data: keyIdentifier });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

exports.disable = async (req, res) => {
  try {
    const { apiKey } = req.body;
    await ApiKey.updateOne({ key: apiKey }, { active: false });
    return res.json({ message: 'Key disabled ' });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

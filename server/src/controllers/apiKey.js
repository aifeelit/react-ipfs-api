const logger = require('../logger');
const redis = require('../services/redis');
const { generateKey } = require('../utils/generator');

const formatKeysLogsResponse = (keys, logs) => {
  const keysInfo = {};
  keys.forEach(info => {
    [type, id] = info.split(' ');
    keysInfo[id] = { logs: []};
  });
  logs.forEach(log => {
    [type, id, timestamp, bytes] = log.split(' ');
    if (keysInfo[id]) {
      keysInfo[id].logs.push({timestamp, bytes});
    }
  });
  return keysInfo;
};

exports.getAll = async (req, res) => {
  try {
    let keysData = await redis.keysAsync('key *');
    let logsData = await redis.keysAsync('log *');
    const data = formatKeysLogsResponse(keysData, logsData);
    console.log('data: ', data);
    return res.json({ data });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

exports.addNew = async (req, res) => {
  const { apiKey } = generateKey();
  try {
    const keyIdentifier = `key ${apiKey}`;
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
    const { id } = req.body;
    const keyId = `key ${id}`;
    const disabledKeyId = `DISABLED ${id}`;
    console.log('KEY ID: ', keyId);
    console.log('disabled key Id: ', disabledKeyId);
    await redis.renameAsync(keyId, disabledKeyId);
    return res.json({ message: 'Key disabled' });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

const logger = require('../logger');

exports.getKeysLogs = async (req, res) => {
  try {
    const identifier = req.id;
    console.log('identifier: ', identifier);
    let data = await redis.keysAsync('log *');
    return res.json({ data });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

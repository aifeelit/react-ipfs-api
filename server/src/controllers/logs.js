const logger = require('../logger');

exports.getAll = async (req, res) => {
  try {
    let data = await redis.keysAsync('log *');
    return res.json({ data });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

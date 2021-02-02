const logger = require('../logger');
const Log = require('../models/log');
const { generateKey } = require('../utils/generator');

exports.getAll = async (req, res) => {
  try {
    const data = await Log.find({});
    return res.json({ data });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

const logger = require('../logger');
const ApiKey = require('../models/apikey');
const { generateKey } = require('../utils/generator');

exports.getAll = async (req, res) => {
  try {
    const data = await ApiKey.find({});
    const keys = data.map(({ key, active }) => ({ key, active }));
    return res.json({ keys });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

exports.addNew = async (req, res) => {
  const { apiKey } = generateKey();
  try {
    const record = {
      key: apiKey,
      active: true,
    };
    await ApiKey.create(record);
    logger.info('Key created correctly.');
    return res.json({ data: record });
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

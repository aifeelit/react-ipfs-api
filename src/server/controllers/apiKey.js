const logger = require('../logger');
const errors = require('../errors');
const apiKeys = require('../models').ApiKey;

exports.getAll = async (req, res) => {
  try {
    const data = await apiKeys.listAll();
    return res.json({ data });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  };
};

exports.addNew = async (req, res) => {
  try {
    const key = {
      email: req.body.email,
      key: 'thisIsSomeSuperApiKey', // @@ todo: look for some hash function here
      active: true,
    };
    await apiKeys.new(key);
    logger.info('Key created correctly.');
    return res.json({ message: 'Success' });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

exports.disable = async (req, res) => {
  try {
    console.log('req body: ', req.body);

    const { apiKey, email } = req.body;

    await apiKeys.disable(email, apiKey);
    return res.json({ message: 'Key disabled ' });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};

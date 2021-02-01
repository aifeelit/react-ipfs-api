const logger = require('../logger');
const ApiKey = require('../models/apikey');
const Log = require('../models/log');
const errors = require('../errors');
const { validateKey } = require('../utils/generator');

async function checkApiKey(req, res, next) {
  try {
    const value = req.headers['auth-ipfs-x'];

    // Check first if it has the correct header;
    if (!value) {
      return next(errors.emptyToken().message);
    }

    // if it has, check that is a vali d API key;
    if (!validateKey(value)) {
      return next(errors.invalidToken().message);
    }

    // All right this is the *most expensive* , but we need to check that the key is not disabled
    const key = await ApiKey.findOne({ key: value }).exec();

    console.log('KEY: ', key);

    if (key.active !== true) {
      return next(errors.disabledToken().message);
    }

    return next();
  } catch (err) {
    logger.error(err.message);
    return next(errors.defaultError(err.message));
  }
}

async function logFowardedRequest(req, res, next) {
  try {
    const value = req.headers['auth-ipfs-x'];
    await Log.create({ key: value });
    next();
  } catch(err) {
    logger.error(err.message);
    return next(errors.defaultError(err.message));
  };
};

module.exports = {
  checkApiKey,
  logFowardedRequest
};

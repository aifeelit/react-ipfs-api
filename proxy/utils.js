const uuidAPIKey = require('uuid-apikey');
const redis = require('./redis');

function isValidKey(apiKey) {
  return uuidAPIKey.isAPIKey(apiKey);
}

function validateKey(value) {  
  if (!isValidKey(value)) {
    throw Error('Key is not valid');
  }
  return true;
};

async function checkIfActive(value) {

  const disabledIdentifier = `DISABLED ${value}`;
  let isDisabled = await redis.getAsync(disabledIdentifier);
  console.log('is Disabled: ', isDisabled);

  if (JSON.parse(isDisabled)) {
    throw Error('Key is disabled >:(');
  }
  
  const keyIdentifier = `key ${value}`;
  let isActive = await redis.getAsync(keyIdentifier);
  // If its null, means key does not exist;
  console.log('isActive: ', isActive);

  if (!JSON.parse(isActive)) {
    throw Error('Key does not exist');
  }

  return true;
}

async function validateAPIKey(apiKey) {
  const isValid = validateKey(apiKey);
  const isActive = await checkIfActive(apiKey);

  return isValid && isActive;
};

async function logRequest(apiKey, contentHeader) {
  const timestamp = new Date();
  // Log format should be consistent to the following: Log ApiKey Timestamp RequestHost
  console.log('headers: ', contentHeader);
  const keyIdentifier = `log ${apiKey} ${timestamp.toISOString()} ${contentHeader}`;
  await redis.setAsync(keyIdentifier, true);
};

module.exports = {
  validateAPIKey,
  logRequest,
};

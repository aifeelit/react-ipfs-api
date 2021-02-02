const uuidAPIKey = require('uuid-apikey');
const redis = require('./redis');

function isValidKey(apiKey) {
  return uuidAPIKey.isAPIKey(apiKey);
}

function validateKey(value) {  
  if (!value) {
    throw Error('No value provided');
  }
  
  if (!isValidKey(value)) {
    throw Error('Key is not valid');
  }

  return true;
};

async function checkIfActive(value) {
  let keyIsActive = await redis.getAsync(value);

  if (!JSON.parse(keyIsActive)) {
    throw Error('Key is disabled');
  }

  return true;
}

async function validateAPIKey(apiKey) {
  const isValid = validateKey(apiKey);
  const isActive = await checkIfActive(apiKey);

  return isValid && isActive;
};

async function logRequest(apiKey, headers) {
  const timestamp = new Date()
  // Log format should be consistent to the following: Log ApiKey Timestamp RequestHost
  const keyIdentifier = `log ${apiKey} ${timestamp.toISOString()} ${headers.host}`;
  await redis.setAsync(keyIdentifier);
};

module.exports = {
  validateAPIKey,
  logRequest,
};

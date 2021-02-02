const uuidAPIKey = require('uuid-apikey');
const redis = require('./redis');

function isValidKey(apiKey) {
  return uuidAPIKey.isAPIKey(apiKey);
}

function validateKey(value) {
    // Check first if it has the correct header;
    if (!value) {
      throw Error('No value provided');
    }
    // if it has, check that is a valid API key;
    if (!isValidKey(value)) {
      throw Error('Key is not valid');
    }
  
    return true;
};

async function checkIfActive(value) {
  // One more edge case, we need to check on the db if the key is stil valid;
  const key = await redis.getAsync(value);

  console.log('key: ', key);

   if (!key) { // This should not happen but probably someone could use the same library to create an api key and get all the way down to this function
     throw Error('Key does not exist');
   }

   if (key.active !== true) {
     throw Error('Key is disabled');
   }

   return true;
}

async function validateAPIKey(apiKey) {
  const isValid = validateKey(apiKey);
  const isActive = await checkIfActive(apiKey);

  return isValid && isActive;

};


module.exports = {
  validateAPIKey,
};

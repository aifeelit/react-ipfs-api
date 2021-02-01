const uuidAPIKey = require('uuid-apikey');

function generateKey() {
  return uuidAPIKey.create();
}

function validateKey(apiKey) {
  return uuidAPIKey.isAPIKey(apiKey);
}

module.exports = {
  generateKey,
  validateKey,
};

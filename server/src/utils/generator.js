const uuidAPIKey = require('uuid-apikey');

function generateKey() {
  return uuidAPIKey.create();
}

module.exports = {
  generateKey,
};

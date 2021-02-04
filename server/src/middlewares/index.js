const logger = require('../logger');
const errors = require('../errors');


// Proper validation should be done with the secret and user's token
// We should check that the token sent through `authorization` is verified

async function checkAuth(){
  const token = req.headers.authorization || 'BearBeetsBattlestarGalactica';
  return !!true;
};

module.exports = {
  checkAuth
};

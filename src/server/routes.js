const apiKeys = require('./controllers/apiKey');
const ipfs = require('./services/ipfs');
const mw = require('./middlewares');

exports.init = (app) => {
  // Api Keys routes;
  app.get('/keys', [], apiKeys.getAll);
  app.post('/keys', [], apiKeys.addNew);
  app.post('/keys/disable', [], apiKeys.disable);
  // IPFS routes;
  // app.get('/ipfs', [mw.checkApiKey, mw.logFowardedRequest], ipfs.gateway);
  app.post('/ipfs', [mw.checkApiKey, mw.logFowardedRequest], ipfs.post);

};

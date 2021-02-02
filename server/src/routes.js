const apiKeys = require('./controllers/apiKey');
const ipfs = require('./services/ipfs');
const mw = require('./middlewares');

exports.init = (app) => {
  // Api Keys routes;
  app.get('/keys', [], apiKeys.getAll);
  app.post('/keys', [], apiKeys.addNew);
  app.post('/keys/disable', [], apiKeys.disable);
  // Logs
  app.get('/logs', [], logs.getAll);
  // IPFS custom routes;
  app.post('/ipfs', [mw.checkApiKey, mw.logFowardedRequest], ipfs.post);

};

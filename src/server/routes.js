const apiKeys = require('./controllers/apiKey');
// const ipfs = require('./services/ipfs');

exports.init = (app) => {
  // Api Keys routes;
  app.get('/keys', [], apiKeys.getAll);
  app.post('/keys', [], apiKeys.addNew);
  app.post('/keys/disable', [], apiKeys.disable);
  // IPFS routes;
  // app.post('/ipfs/upload', [], ipfs.upload);
};

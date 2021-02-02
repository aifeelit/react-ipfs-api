const apiKeys = require('./controllers/apiKey');
const logs = require('./controllers/logs');
const mw = require('./middlewares');

exports.init = (app) => {
  // Api Keys routes;
  // app.get('/key', apiKeys.getOne); for testing

  app.post('/key', [], apiKeys.addNew);
  app.post('/key/disable', [], apiKeys.disable);
  app.get('/keys', [], apiKeys.getAll);
  // Logs
  app.get('/logs', [], logs.getAll);
};

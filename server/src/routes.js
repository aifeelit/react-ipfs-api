const users = require('./controllers/user');
const apiKeys = require('./controllers/apiKey');
const mw = require('./middlewares');

exports.init = (app) => {

  // Mock routes
  app.post('/login', users.logIn);
  // Api Keys routes;
  // app.get('/key', apiKeys.getOne); for testing

  app.post('/key', [], apiKeys.addNew);
  app.post('/key/disable', [], apiKeys.disable);
  app.get('/keys', [], apiKeys.getAll);
};

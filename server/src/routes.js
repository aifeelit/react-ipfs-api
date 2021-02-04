const users = require('./controllers/user');
const apiKeys = require('./controllers/apiKey');
const mw = require('./middlewares');

exports.init = (app) => {

  // Mock routes
  app.post('/login', users.logIn);
  // Api Keys routes;
  // app.get('/key', apiKeys.getOne); for testing

  app.post('/key', [mw.checkAuth], apiKeys.addNew);
  app.post('/key/disable', [mw.checkAuth], apiKeys.disable);
  app.get('/keys', [mw.checkAuth], apiKeys.getAll);
};

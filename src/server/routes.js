const apiKeys = require('./controllers/apiKey');
const auth = require('./middlewares/auth');

exports.init = (app) => {
  app.get('/keys', [], apiKeys.getAll);  
  app.post('/keys', [], apiKeys.addNew);
  app.post('/keys/disable', [], apiKeys.disable);
};

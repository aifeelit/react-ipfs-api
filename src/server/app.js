const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const middlewares = require('./middlewares');

const config = require('./config');
const routes = require('./routes');
const logger = require('./logger');

const db = require('./db');

function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());

  routes.init(app);

  app.get('/', [middlewares.checkApiKey, middlewares.logFowardedRequest ], async (req, res) => {
    try {
      return res.status(200).send({ message: 'Beep boop' });
    } catch (err) {
      logger.error(`Error: ${err}`);
      return res.status(500).send(err.message);
    }
  });

  Promise.resolve().then(() => {
    return db.initializeConnection().then(() => {
      app.listen(config.APP.PORT);
      console.info(`Server listening on port ${config.APP.PORT}`);
    });
  });
}

init();

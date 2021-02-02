const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const routes = require('./routes');

const db = require('./db');

function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());

  routes.init(app);

  Promise.resolve().then(() => {
    return db.initializeConnection().then(() => {
      app.listen(3000);
      console.info(`Server listening on port ${3000}`);
    });
  });
}

init();

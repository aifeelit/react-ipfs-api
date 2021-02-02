const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const routes = require('./routes');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes.init(app);

app.listen(config.APP.PORT, () => logger.info(`App server listening on port ${config.APP.PORT}`));

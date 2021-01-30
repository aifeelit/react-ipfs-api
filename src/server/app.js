const express = require('express');
const IPFSClient = require('ipfs-http-client');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes');

const IPFS = new IPFSClient({
  host: config.IPFS.HOST,
  port: config.IPFS.PORT,
  protocol: config.IPFS.PROTOCOL,
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.init(app);

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Beep boop' });
});

app.listen(config.APP.PORT, () => {
  console.info(`Server listening on port ${config.APP.PORT}`);
});

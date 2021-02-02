const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const logger = require('./logger');
const { validateAPIKey } = require('./utils');

const IPFS_API_URL = process.env.IPFS_API_URL || 'http://127.0.0.1:5001' // default URL that uses the daemon to serve the HTTP API
const PORT = 5000;


const app = express();
    
app.use('', async function(req, res, next) {
    try {
      const apiKey = req.headers['x-auth-ipfs'];
      await validateAPIKey(apiKey);
      next();
    } catch(err) {
      logger.error(`${err}`);
      res.status(403).send({ error: `${err}` });
    }

});

const ipfsApiProxy = createProxyMiddleware({
  target: IPFS_API_URL,
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
});

app.use(ipfsApiProxy);

app.listen(PORT, () => logger.info(`PROXY listening on port ${PORT}`));
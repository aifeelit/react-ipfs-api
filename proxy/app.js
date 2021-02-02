const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { db } = require('../server/src/db');
const IPFS_API_URL = process.env.IPFS_API_URL || 'http://127.0.0.1:5001' // default URL that uses the daemon to serve the HTTP API

const PORT = 5000;
const app = express();

const options = {
    target: IPFS_API_URL,
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug',
    onProxyReq: function (proxyReq, req, res) {
        console.log('headers: ', req.headers);
    },
};


const ipfsApiProxy = createProxyMiddleware(options);
  
function init() {
    app.use(ipfsApiProxy);
    Promise.resolve(() => {
        return db.initializeConnection().then(() =>{
            app.listen(PORT);
            console.info(`Proxy server listening on port ${PORT}`);
        })
    })
}

init();

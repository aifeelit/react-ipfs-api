const express = require('express');
const ipfsClient = require('ipfs-http-client');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes');

const ipfs = new ipfsClient({ host: config.IPFS.HOST , port : config.IPFS.PORT , protocol: config.IPFS.PROTOCOL  });
const app = express();
routes.init(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'IPFS!' });
});



app.listen(config.APP.PORT, () => {
    console.log(`Server listening on port ${config.APP.PORT}`);
})

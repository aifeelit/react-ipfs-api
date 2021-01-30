const Pino = require('pino');

const logger = Pino({ prettyPrint: true });

module.exports = logger;

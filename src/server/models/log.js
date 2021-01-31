const { Schema, model } = require('mongoose');

const schema = new Schema({
  key: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const log = model('Log', schema);

module.exports = log;
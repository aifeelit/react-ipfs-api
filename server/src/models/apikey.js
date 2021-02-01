const { Schema, model } = require('mongoose');

const schema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const apiKey = model('ApiKey', schema);

module.exports = apiKey;
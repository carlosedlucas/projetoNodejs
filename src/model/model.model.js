var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  description: String,
  image: String,
  docs: {
    default: [],
  },
  name: String,
  company: {
    type: 'ObjectId',
    ref: 'Unidade',
  },
});

var Model = mongoose.model('Model', ModelSchema);
module.exports = Model;

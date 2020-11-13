var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnidadeSchema = new Schema(
  {
    name: {
      type: String,
    },
    assets: {
      type: [
        {
          type: 'ObjectId',
          ref: 'Ativo',
        },
      ],
      default: [],
    },
    empresa: {
      type: {
        type: 'ObjectId',
        ref: 'Empresa',
      },
    },
  },
  {
    timestamps: true,
  }
);

var Unidade = mongoose.model('Unidade', UnidadeSchema);
module.exports = Unidade;

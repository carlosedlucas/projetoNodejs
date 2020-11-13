var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: [
      {
        unidades: {
          type: [
            {
              type: 'ObjectId',
              ref: 'Unidade',
            },
          ],
          default: [],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

var Empresa = mongoose.model('Empresa', EmpresaSchema);
module.exports = Empresa;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// É obrigatório que cada ativo tenha uma imagem, nome, descrição, modelo,
// responsável(usar referência de id), status(Disponível, Em manutenção e
// Desativado) e nível de saúde (healthscore ou/ hs).

var AtivoSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    model: {
      type: 'ObjectId',
      ref: 'Model',
    },
    responsavel: {
      type: 'ObjectId',
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['DISPONIVEL', 'EM_MANUTENCAO', 'DESATIVADO'],
      default: 'DISPONIVEL',
    },
    healthscore: {
      type: Number,
      default: 100,
    },
    unidades: {
      type: [
        {
          type: 'ObjectId',
          ref: 'Unidade',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

var Ativo = mongoose.model('Ativo', AtivoSchema);
module.exports = Ativo;

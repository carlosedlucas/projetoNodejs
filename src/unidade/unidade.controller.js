var Unidade = require('./unidade.model');
var mongoose = require('mongoose');

exports.getUnidades = async (req, res) => {
  try {
    let unidade = await Unidade.find();
    return res.send({ message: 'Unidades obtidas com sucesso', data: unidade });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getUnidade = async (req, res) => {
  try {
    let unidade = await Unidade.findById({
      _id: req.params.id,
    });
    return res.send({ message: 'Unidade obtida com sucesso', data: unidade });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.createUnidade = async (req, res) => {
  try {
    let unidade = await Unidade.create(req.body);
    return res.send({ message: 'Unidade criada com sucesso', data: unidade });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateUnidade = async (req, res) => {
  try {
    let unidadeId = req.params.id;
    let { nome, ativos } = req.body;
    let newUnidade = { nome, ativos };
    const unidadeUpdated = await Unidade.findByIdAndUpdate(
      mongoose.Types.ObjectId(unidadeId),
      { $set: newUnidade },
      { new: true }
    );
    return res.send({
      message: 'Unidade atualizada com sucesso',
      data: unidadeUpdated,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteUnidade = async (req, res) => {
  try {
    let unidade = await Unidade.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.send({ message: 'Unidade deletada com sucesso', data: unidade });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

var Ativo = require('./ativo.model');
var mongoose = require('mongoose');

exports.getAtivos = async (req, res) => {
  try {
    let ativo = await Ativo.find();
    return res.send({ message: 'Ativos obtidos com sucesso', data: ativo });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getAtivo = async (req, res) => {
  try {
    let ativo = await Ativo.findById({
      _id: req.params.id,
    });
    return res.send({ message: 'Ativo obtido com sucesso', data: ativo });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.createAtivo = async (req, res) => {
  try {
    let ativo = await Ativo.create(req.body);
    return res.send({ message: 'Ativo criado com sucesso', data: ativo });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateAtivo = async (req, res) => {
  try {
    let ativoId = req.params.id;
    let newAtivo = ({
      imagem,
      nome,
      descricao,
      modelo,
      responsavel,
      healthscore,
    } = req.body);
    const ativoUpdated = await Ativo.findByIdAndUpdate(
      mongoose.Types.ObjectId(ativoId),
      { $set: newAtivo },
      { new: true }
    );
    return res.send({
      message: 'Ativo atualizado com sucesso',
      data: ativoUpdated,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteAtivo = async (req, res) => {
  try {
    let ativo = await Ativo.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.send({ message: 'Ativo deletado com sucesso', data: ativo });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

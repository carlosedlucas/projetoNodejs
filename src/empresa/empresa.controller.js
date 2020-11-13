var Empresa = require('./empresa.model');
var mongoose = require('mongoose');

exports.getEmpresas = async (req, res) => {
  try {
    let empresa = await Empresa.find();
    return res.send({ message: 'Empresas obtidas com sucesso', data: empresa });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getEmpresa = async (req, res) => {
  try {
    let empresa = await Empresa.findById({
      _id: req.params.id,
    });
    return res.send({ message: 'Empresa obtida com sucesso', data: empresa });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.createEmpresa = async (req, res) => {
  try {
    let empresa = await Empresa.create(req.body);
    return res.send({ message: 'Empresa criada com sucesso', data: empresa });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateEmpresa = async (req, res) => {
  try {
    let empresaId = req.params.id;
    let { nome, unidades } = req.body;
    let newEmpresa = { nome, unidades };
    const empresaUpdated = await Empresa.findByIdAndUpdate(
      mongoose.Types.ObjectId(empresaId),
      { $set: newEmpresa },
      { new: true }
    );
    return res.send({
      message: 'Empresa atualizada com sucesso',
      data: empresaUpdated,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteEmpresa = async (req, res) => {
  try {
    let empresa = await Empresa.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.send({ message: 'Empresa deletada com sucesso', data: empresa });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

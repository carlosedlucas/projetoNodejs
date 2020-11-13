var Model = require('./model.model');
var mongoose = require('mongoose');

exports.getModels = async (req, res) => {
  try {
    let model = await Model.find();
    return res.send({ message: 'Modelos obtidos com sucesso', data: model });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getModel = async (req, res) => {
  try {
    let model = await Model.findById({
      _id: req.params.id,
    });
    return res.send({ message: 'Model obtido com sucesso', data: model });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.createModel = async (req, res) => {
  try {
    let model = await Model.create(req.body);
    return res.send({ message: 'Model criado com sucesso', data: model });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateModel = async (req, res) => {
  try {
    let modelId = req.params.id;
    let { description, image, docs, name, company } = req.body;
    let newModel = { description, image, docs, name, company };
    const modelUpdated = await Model.findByIdAndUpdate(
      mongoose.Types.ObjectId(modelId),
      { $set: newModel },
      { new: true }
    );
    return res.send({
      message: 'Model atualizado com sucesso',
      data: modelUpdated,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteModel = async (req, res) => {
  try {
    let model = await Model.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.send({ message: 'Model deletado com sucesso', data: model });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

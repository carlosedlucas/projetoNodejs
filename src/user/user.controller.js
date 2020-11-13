var User = require('./user.model');
var mongoose = require('mongoose');

exports.getUsers = async (req, res) => {
  try {
    let users = await User.find();
    return res.send({ message: 'Usuários obtidos com sucesso', data: users });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    let user = await User.findById({
      _id: req.params.id,
    });
    return res.send({ message: 'Usuário obtido com sucesso', data: user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    let users = await User.create(req.body);
    return res.send({ message: 'Usuários obtidos com sucesso', data: users });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    let userId = req.params.id;
    let { login, email } = req.body;
    let newUser = { login, email };
    const userUpdated = await User.findByIdAndUpdate(
      mongoose.Types.ObjectId(userId),
      { $set: newUser },
      { new: true }
    );
    return res.send({
      message: 'Usuário atualizado com sucesso',
      data: userUpdated,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.send({ message: 'Usuário deletado com sucesso', data: user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const express = require('express');
const userRouter = require('../user/user.router');
const empresaRouter = require('../empresa/empresa.router');
const unidadeRouter = require('../unidade/unidade.router');
const ativoRouter = require('../ativo/ativo.router');
const modelRouter = require('../model/model.router');

module.exports = (app) => {
  app.use('/users', userRouter);
  app.use('/empresas', empresaRouter);
  app.use('/unidades', unidadeRouter);
  app.use('/ativos', ativoRouter);
  app.use('/model', modelRouter);
  app.get('/', function (req, res) {
    res.send('Bem-vindo a Indústria Freios Supremos');
  });
};

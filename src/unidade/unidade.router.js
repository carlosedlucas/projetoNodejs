const express = require('express');
const router = express.Router();
const unidadeController = require('./unidade.controller');

router.get('/', unidadeController.getUnidades);

router.get('/:id', unidadeController.getUnidade);

router.post('/', unidadeController.createUnidade);

router.put('/:id', unidadeController.updateUnidade);

router.delete('/:id', unidadeController.deleteUnidade);

module.exports = router;

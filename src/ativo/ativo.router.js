const express = require('express');
const router = express.Router();
const ativoController = require('./ativo.controller');

router.get('/', ativoController.getAtivos);

router.get('/:id', ativoController.getAtivo);

router.post('/', ativoController.createAtivo);

router.put('/:id', ativoController.updateAtivo);

router.delete('/:id', ativoController.deleteAtivo);

module.exports = router;

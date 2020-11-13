const express = require('express');
const router = express.Router();
const empresaController = require('./empresa.controller');

router.get('/', empresaController.getEmpresas);

router.get('/:id', empresaController.getEmpresa);

router.post('/', empresaController.createEmpresa);

router.put('/:id', empresaController.updateEmpresa);

router.delete('/:id', empresaController.deleteEmpresa);

module.exports = router;

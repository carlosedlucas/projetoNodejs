const express = require('express');
const router = express.Router();
const modelController = require('./model.controller');

router.get('/', modelController.getModels);

router.get('/:id', modelController.getModel);

router.post('/', modelController.createModel);

router.put('/:id', modelController.updateModel);

router.delete('/:id', modelController.deleteModel);

module.exports = router;

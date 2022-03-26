const express = require('express')
const router = express.Router()
const prospectoController = require('../controllers/prospectos.controller');
// Retrieve all prospectos
router.get('/', prospectoController.findAll);
// Retrieve all prospectos with status 'enviado'
router.get('/enviados', prospectoController.findByStatus);
// Create a new prospecto
router.post('/', prospectoController.create);
// Retrieve a single prospecto with id
router.get('/:id', prospectoController.findById);
// Update a prospecto with id
router.put('/:id', prospectoController.update);
// Delete a prospecto with id
router.delete('/:id', prospectoController.delete);
module.exports = router
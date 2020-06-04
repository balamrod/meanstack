var express = require('express');
var productoController = require('../controllers/ProductoController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir:'./uploads/productos'});

var api = express.Router();

api.post('/producto/registrar', path, productoController.registrar);

module.exports = api;
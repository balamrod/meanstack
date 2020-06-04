var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombres: String,
    dni: String,
    correo: String,  
    puntos: Number,
});

module.exports = mongoose.model('producto',ProductoSchema);
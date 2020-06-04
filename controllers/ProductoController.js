var Producto = require('../models/producto');
var fs = require('fs');
var path = require('path');

function registrar(req, res){
    var data = req.body;

    if (req.files){
        console.log(req);
        var imagen_path = req.files.imagen.path;
        var name = image_pat.split('\\');
        var imagen_name = name[2]; // es la posición del nombre de la imagen dentro del array name.

        var producto = new Producto();
        producto.titulo = data.titulo;
        producto.descripcion = data.descripcion;
        producto.imagen = null;
        producto.precio_compra = data.precio_compra;
        producto.precio_venta = data.precio_venta;
        producto.stock = data.stock;
        producto.idcategoria = data.idcategoria;
        producto.puntos = data.puntos;

        producto.save((err, producto_save) => {
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            } else {
                if (producto_save) {
                    res.status(200).send({producto: producto_save});
                } else {
                    res.status(403).send({message: 'el producto no se pudo registrar'});
    
                }
            }
        });

    }
}


module.exports = {
    registrar,
}
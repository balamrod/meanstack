var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require ('mongoose');
var port = process.env.port|| 4201;

//ROUTES
var user_routes = require('./routes/user');
var categoria_routes = require('./routes/categoria');
var producto_routes = require('./routes/producto');

var app = express(); // para poder usar el express

mongoose.connect('mongodb://localhost:27017/sistema',{useUnifiedTopology:true, useNewUrlParser: true},(err,res)=>{
    if(err){
        throw err;
    } else {
        console.log("corriendo servidor");
        app.listen(port, function(){
            console.log("Servidor conectado en " + port);
        });
    }
});

app.use(bodyparser.urlencoded({extended: true})); // analizar el texto como datos codificados en la URL dice...
app.use(bodyparser.json()); // analiza el texto como json y expone el objeto resultante en el .body

app.use('/api',user_routes);
app.use('/api',categoria_routes);
app.use('/api',producto_routes);


module.exports = app;
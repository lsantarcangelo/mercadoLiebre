const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mainRoutes = require('./routes/mainRoutes.js');

//recursos estaticos
app.use(express.static('public'));

//Rutas
app.use('/', mainRoutes)

app.listen(port, console.log('Servidor corriendo en el puerto ' + port));
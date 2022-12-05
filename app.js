const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mainRoutes = require('./routes/mainRoutes.js');

// Middlewares
app.use(express.static('public'));

// Template Engine
app.set('view engine', 'ejs');
app.set('views', '/views');

// Routes
app.use('/', mainRoutes)

// Server
app.listen(port, console.log('Servidor corriendo en el puerto ' + port));
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

//recursos estaticos
app.use(express.static('public'));

app.listen(port, console.log('Servidor corriendo en el puerto ' + port));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})
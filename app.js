const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

//recursos estaticos
app.use(express.static('public'));

app.listen(PORT, console.log('Servidor corriendo en el puerto ' + PORT));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})
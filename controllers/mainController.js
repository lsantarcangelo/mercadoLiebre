const path = require('path');

let mainController = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, '../views/home.ejs'))
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/login.ejs'))
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/register.ejs'))
    }
}

module.exports = mainController;
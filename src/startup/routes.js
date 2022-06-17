const express = require('express');
const convert = require('../routes/convert');
const updatedb = require('../routes/updatedb');
module.exports = function (app) {
    app.use(express.json());
    app.use('/api/convert', convert);
    app.use('/api/updatedb', updatedb);
}
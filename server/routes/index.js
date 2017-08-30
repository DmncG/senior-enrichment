'use strict'
const api = require('express').Router();
module.exports = api;

api.use('/campus', require('./campus'))
api.use('/students', require('./students'))

api.use(function(req, res) {
    res.status(404).end()
})
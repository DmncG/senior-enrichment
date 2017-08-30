'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const defaultImage = "../public/images/defaultplanet.png"
module.exports = db.define('campus', {
  name: { 
        type: Sequelize.STRING,
        allowNull: false,
  },
  image: {
        type: Sequelize.STRING,
        defaultValue: defaultImage,
  },
})
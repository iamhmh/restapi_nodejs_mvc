const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:')

const models = [
    require('../models/user'),
].map(model => model(sequelize));

sequelize.sync().then(console.log('La connexionn à la base de données a été établie avec succès'));

module.exports = sequelize;
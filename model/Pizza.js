const Sequelize = require('sequelize');


const connection = require('../database/database');


const Pizza = connection.define(
    'tbl_pizza',
    {
        nome_pizza:{
            type: Sequelize.STRING(200),
            allowNull: false
        }
    }
);



module.exports = Pizza;
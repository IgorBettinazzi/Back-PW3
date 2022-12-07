
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'apimundopartitura',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;

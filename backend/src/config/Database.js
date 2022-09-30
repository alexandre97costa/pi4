var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'database',
    'username', 
    'password',
    {
        host: '',
        port: "5432",
        dialect: "postgres",
        dialectOptions: {
            ssl:{
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;
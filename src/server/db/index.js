const Sequelize = require('sequelize');
const { DB, ENV } = require('../config');
const dbConfig = DB[ENV];

const sequelize = new Sequelize(dbConfig.dialect || 'postgres',
                                dbConfig.username || 'postgres',
                                dbConfig.password || '',
                                {
                                    host: dbConfig.host || 'localhost',
                                    port: dbConfig.port || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: dbConfig.ssl === "true"
                                    }
                                });
                                
const User = sequelize.define('User', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = {
    sequelize: sequelize,
    User: User
};
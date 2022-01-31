const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        schema: 'app',
        tableName: 'users',
        timestamps: false,
    }
)

module.exports = User

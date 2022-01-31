const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const Movie = sequelize.define(
    'Movie',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startRentalDate: {
            type: DataTypes.DATE,
            default: 'now()',
            field: 'start_rental_date',
        },
        endRentalDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'end_rental_date',
        },
        rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        schema: 'app',
        timestamps: false,
        tableName: 'movies',
    }
)

module.exports = Movie

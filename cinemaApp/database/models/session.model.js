const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const Session = sequelize.define(
    'Session',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        startTimeHours: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'start_time_hours',
        },
        startTimeMinutes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'start_time_minutes',
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seatsQuantity: {
            type: DataTypes.INTEGER,
            default: 0,
            field: 'seats_quantity',
        },
        movieId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'movie_id'
        },
    },
    {
        schema: 'app',
        tableName: 'sessions',
    }
)

module.exports = Session

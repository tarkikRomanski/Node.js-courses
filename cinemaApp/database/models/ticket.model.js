const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const Ticket = sequelize.define(
    'Ticket',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        seatsQuantity: {
            type: DataTypes.INTEGER,
            default: 1,
            field: 'seats_quantity',
        },
        sessionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'session_date',
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at',
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            allowNull: false,
        },
        sessionId: {
            type: DataTypes.INTEGER,
            field: 'session_id',
            allowNull: false,
        },
    },
    {
        schema: 'app',
        tableName: 'tickets',
    }
)

module.exports = Ticket
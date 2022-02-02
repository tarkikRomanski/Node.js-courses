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
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                len: [3, 150],
            },
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
            type: DataTypes.FLOAT,
            allowNull: false,
            get() {
                const value = this.getDataValue('rate')

                return Math.ceil(value)
            },
            set(value) {
                this.setDataValue('rate', Math.ceil(value))
            },
        },
        titleWithRate: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.getDataValue('title')} - ${this.getDataValue('rate')}`
            },
            set(value) {
                const [title, rate] = value.split(' - ')

                this.setDataValue('title', title)
                this.setDataValue('rate', Number(rate))
            },
        }
    },
    {
        schema: 'app',
        timestamps: false,
        tableName: 'movies',
    }
)

module.exports = Movie

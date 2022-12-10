const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const RecoveryPassword = db.define('recovery_password', {
    id: {
        type: DataType.UUID,
        primaryKey: true
    },
    userId : {
        type: DataTypes.UUID,
        allowNull:false,
        references: {
             model: Users,
             key: 'id'
        }
    },
    used: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})
module.exports = RecoveryPassword
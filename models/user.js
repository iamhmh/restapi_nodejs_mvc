const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                min:{
                    args: 2,
                },
                max:{
                    args: 50,
                }
            }
        },
        email:{
            type: DataTypes.STRING(60),
            validate: {
                isEmail: true,
            }
        }
    });
};
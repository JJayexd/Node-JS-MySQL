import sequelize from '../Configs/sequelizeConfig.js';
import { DataTypes, Model } from 'sequelize';

export default class carModel extends Model {}

carModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },

    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fueltype: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'car'
});
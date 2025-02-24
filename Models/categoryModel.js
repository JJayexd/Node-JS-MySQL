import sequelize from '../Configs/sequelizeConfig.js';
import { DataTypes, Model } from 'sequelize';

export default class categoryModel extends Model {}

categoryModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'category'
})
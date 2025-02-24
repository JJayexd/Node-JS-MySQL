import sequelize from '../Configs/sequelizeConfig.js';
import { DataTypes, Model } from 'sequelize';

export default class brandModel extends Model {}

brandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    logo: {
        type: DataTypes.BLOB,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'brand'
})

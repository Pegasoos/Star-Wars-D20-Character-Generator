const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class D20_Character extends Model {

};

D20_Character.init(
    {
        id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:"user",
                key:"id"
            }
        },
        char_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        strength: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        dexterity: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        constitution: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        intelligence: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        wisdom: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        charisma: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        vitality_points:{
            type: DataTypes.TINYINT
        },
        wound_points:{
            type: DataTypes.TINYINT
        },
        fortitude_save:{
            type: DataTypes.TINYINT
        },
        reflex_save:{
            type: DataTypes.TINYINT
        },
        will_save:{
            type: DataTypes.TINYINT
        },
        defense:{
            type: DataTypes.TINYINT
        },
        species:{
            type: DataTypes.STRING
        },
        class:{
            type: DataTypes.STRING
        },
        feats: {
            type: DataTypes.JSON
        },
        skills: {
            type: DataTypes.JSON
        },
        inventory: {
            type: DataTypes.JSON
        },
        languages:{
            type: DataTypes.STRING
        },
        char_description:{
            type: DataTypes.TEXT
        },
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:"D20_Character",
    }
);

module.exports = D20_Character;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init( 
    {
        id: {
            type: DataTypes.Interger,
            allownull: false,
            primaryKey: true,
            autoIncrement: true,
        

        },
        tittle: {
            type: DataTypes.String,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,

        },
        body: {
            type: DataTypes.String,
            allowNull: false,

        },
        userId: {
            type: DataTypes.INTERGER,
            references: {
                model: 'user',
                key: 'id',
              },
            },
    },         

        {
             sequelize,
             timestamps: false,
             freezeTableName: true,
             underscored: true,
             modelName: "User",

        },

);

module.exports = Post;

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Role', {
        id:{
            type: DataTypes.UUID,
            unique:true,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        roles:{
            type:DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: 'El campo "roles" no puede ser nulo.',
                },
                notEmpty: {
                    msg: 'El campo "roles" no puede estar vacío.',
                },
            },  
        }
    });
};
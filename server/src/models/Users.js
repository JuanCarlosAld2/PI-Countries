const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Users', {
    id:{
      type: DataTypes.UUID,
      unique:true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    nickName:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    edad:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false 
    },
    role:{
        type:DataTypes.ENUM('customer', 'administrator'),
        allowNull:false
    }, 
    recoveryToken:{
        type:DataTypes.STRING,
        allowNull:true
    },


  });
};
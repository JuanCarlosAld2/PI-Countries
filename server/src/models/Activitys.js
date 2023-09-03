const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
sequelize.define("Activity",{
    id:{
        type:DataTypes.INTEGER,
        // allowNull: false,
        unique:true,
        primaryKey:true,
        autoIncrement:true

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    difficulty:{
        type:DataTypes.ENUM("1","2","3","4","5"),
        allowNull:false,
    },
    duration:{
        type: DataTypes.INTEGER,
    },
    season:{
        type:DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"),
        allowNull:false
    }
});
};
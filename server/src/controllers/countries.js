const {Country,Activity,Op} = require('../db');

const infCountACt=async(idPais)=>{
    const ContAct= await Country.findOne({
        where:{
            id:{
                [Op.iLike]:`%${idPais}%`
            },   
        },
        include:{
            model:Activity,
            through:{// y de la tabla intermedia 
                attributes:[]//ninguno
            }
        }
    });
    return ContAct
};



const infoQue = async (name) => {
    const info =  await Country.findAll({
        where:{
            name:{
                [Op.iLike]:`%${name}%`
            }
        }
    })
    return info
}

module.exports={
    infCountACt,
    infoQue
};
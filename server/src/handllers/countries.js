const {Country,Op,Activity} = require('../db');
const {infCountACt, infoQue} = require('../controllers/countries');


const getAll = async (req,res) =>{
    
    try {
        const allCount= await Country.findAll({
            include: [{ model: Activity }] 
        });
        if(allCount.length === 0){
            return res.status(404).json({message:"non-existent data"});
        };
        res.status(200).json(allCount);
    } catch (error) {
        res.status(500).json({message:error.message});
    };

};


const getIdPais = async (req,res)=>{
    const {idPais}= req.params;
    try {
        const info= await infCountACt(idPais);
        
        if(!info){
            return res.status(404).json({message:"non-existent data"});
        }

         res.status(200).json(info);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    };
};

const getquery = async (req,res) => {
    const {name} = req.query;
  
    try {
        const allQuery= await infoQue(name)
        if(allQuery.length === 0){
            //return res.status(404).json({message:"non-existent data"});
            return res.status(200).json([]);//modifico a un status 200 par apoder trabajar con la respuesta vacia
        }
        res.json(allQuery)
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}



module.exports = {
    getAll,
    getIdPais,
    getquery
};
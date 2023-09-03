const getData = require('../controllers/getData')
const {Country} = require('../db');


const UploadData = async (req,res) =>{
    try {
        const dataCountry = await getData();
        if(!dataCountry){
            res.status(404).json({message:"non-existent data"})
        }
        await Country.bulkCreate(dataCountry);
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.status(200).json("Updated database");
    } catch (error) {
        res.status(500).json({message:error.message});
    }
 
};


module.exports= UploadData;





/*

const {id,name,flag,continent, capital,subregion,area,population}=req.body;

    try {
        const dataCountry = await getData();
        await Country.bulkCreate(dataCountry)
        res.status(200).json("Updated database")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
*/
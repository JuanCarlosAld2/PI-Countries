const {Activity} = require('../db');


const createActivity = async (req,res) =>{
    const {	name,difficulty,duration,season,paises}= req.body;
    //console.log(typeof (name),typeof (difficulty),typeof(duration),typeof(season),typeof(countries));
    //console.log(name,difficulty,duration,season,paises);
    try {
        if( !name || !difficulty || !duration || !season ){
            return res.status(404).json({message:"insufficient data"})
        };
        if(paises.length === 0){
            return res.status(404).json({message:"it is necessary to enter at least one country"})
        }
        const newAct= await Activity.create({
           name,difficulty,duration,season
        });
        await newAct.addCountries(paises);
        res.status(200).json({message:"activity created successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }

};

const getActivities = async (req,res) => {
    try {
        const allActiv = await Activity.findAll();
        if(allActiv.length === 0){
            return res.status(404).json({message:"non-existent data"});
        };
        res.status(200).json(allActiv);
    } catch (error) {
        res.status(500).json({message:error.message});
    };
};


module.exports={
    createActivity,
    getActivities
}
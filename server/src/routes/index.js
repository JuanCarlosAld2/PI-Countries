//const {Country} = require('../db');
const { Router } = require("express");
const UploadData = require('../handllers/uploadData');
const countriesRoutes = require('./countriesRoutes');
const activitiesRoutes = require('./activitiesRoutes');
const mainRouter = Router();

// mainRouter.post("/initialize-data",UploadData);
mainRouter.use("/countries",countriesRoutes);
mainRouter.use("/activities",activitiesRoutes);





// mainRouter.get("/todo",async(req,res)=>{
//     const todo= await Country.findAll();
//     res.json(todo)
// })








module.exports = mainRouter;

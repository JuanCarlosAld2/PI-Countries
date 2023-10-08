//const {Country} = require('../db');
const { Router } = require("express");
const UploadData = require('../handllers/uploadData');
const countriesRoutes = require('./countriesRoutes');
const activitiesRoutes = require('./activitiesRoutes');
const usersRoutes = require('./usersRoutes')
const mainRouter = Router();

// mainRouter.post("/initialize-data",UploadData);
mainRouter.use("/countries",countriesRoutes);
mainRouter.use("/activities",activitiesRoutes);
mainRouter.use("/user",usersRoutes)
mainRouter.get("/",(req,res)=>{
    res.json({message: "hello soy el servidor"})
})





// mainRouter.get("/todo",async(req,res)=>{
//     const todo= await Country.findAll();
//     res.json(todo)
// })








module.exports = mainRouter;

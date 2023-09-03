const { Router } = require("express");
const {getAll, getIdPais,getquery} = require('../handllers/countries');

const countriesRouters = Router();

countriesRouters.get("/name",getquery)
countriesRouters.get("/:idPais",getIdPais);
countriesRouters.get("/",getAll);

module.exports = countriesRouters;
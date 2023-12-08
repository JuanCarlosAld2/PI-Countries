const { Router } = require("express");
const createClient = require("../handllers/Users/createClient")
const getAccess = require("../handllers/Users/getAccess")


const usersRoutes = Router();

usersRoutes.post("/create-client",createClient)
usersRoutes.post("/get-access",getAccess)


module.exports = usersRoutes;
const { Router } = require("express");
const createClient = require("../handllers/Users/createClient")


const usersRoutes = Router();

usersRoutes.post("/create-client",createClient)


module.exports = usersRoutes;
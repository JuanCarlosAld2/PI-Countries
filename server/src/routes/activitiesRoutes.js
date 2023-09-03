const { Router } = require("express");
const {createActivity,getActivities} = require('../handllers/activities');
const activitiesRoutes = Router();

activitiesRoutes.post('/',createActivity);
activitiesRoutes.get('/',getActivities)


module.exports = activitiesRoutes;
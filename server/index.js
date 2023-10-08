require ('dotenv').config({path:'./.env'})
const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const uploadData = require('./src/handllers/uploadData')

const {PUERTO} = process.env;
const PORT = PUERTO;


conn.sync({ force: true }).then(() => {
  uploadData().then(() => {
    console.log('Carga de datos completada.');
    
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Error durante la carga de datos:', error.message);
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  });
}).catch(error => console.error(error));
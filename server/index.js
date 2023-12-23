require('dotenv').config({ path: './.env' });
const axios = require('axios');
const server = require('./src/server');
const { conn } = require('./src/db.js');
const uploadData = require('./src/handllers/uploadData.js');
const { createRoles } = require('./src/libs/initialSetup.js');

const { PUERTO } = process.env;
const PORT = PUERTO;

async function startServer() {
  try {
    // Sincronizar la base de datos
    await conn.sync({ force: true });

    // Crear roles
    await createRoles();
    console.log('Roles creados correctamente.');

    // Cargar datos
    await uploadData();
    console.log('Carga de datos completada.');

    // Iniciar el servidor
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error durante la inicialización:)', error.message);
  }
}

// Inicializar la aplicación
startServer();












//real
// require ('dotenv').config({path:'./.env'})
// const server = require("./src/server");
// const { conn } = require('./src/db.js');
// const uploadData = require('./src/handllers/uploadData')
// const {PUERTO} = process.env;
// const PORT = PUERTO;
// const {createRoles} = require("./src/libs/initialSetup.js")


// conn.sync({ force: true }).then(() => {
//   uploadData().then(() => {
//     console.log('Carga de datos completada.');
//     server.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   }).catch(error => {
//     console.error('Error durante la carga de datos:>', error.message);
//     server.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   });
// }).catch(error => console.error(error));
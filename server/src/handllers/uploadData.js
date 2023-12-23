
const getData = require('../controllers/getData');
const { Country } = require('../db');

const UploadData = async (req, res) => {
  try {
    const dataCountry = await getData();

    if (!dataCountry || dataCountry.length === 0) {
      return res.status(404).json({ message: "No data to upload" });
    }

    const createdCountries = await Country.bulkCreate(dataCountry);

    if (!createdCountries || createdCountries.length === 0) {
      return res.status(500).json({ message: 'Error creating countries' });
    }

    // Verificar que 'res' exista antes de acceder a 'status'
    if (res) {
      // Respuesta exitosa
      res.status(200).json("Updated database");
    } else {
      console.error('Error en UploadData: Objeto de respuesta (res) es undefined.');
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error en UploadData:', error.message);
    if (res) {
      res.status(500).json({ message: error.message });
    } else {
      console.error('Error durante la inicialización: Objeto de respuesta (res) es undefined.');
    }
  }
};

module.exports = UploadData;



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
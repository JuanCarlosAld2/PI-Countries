const axios = require('axios')

const getData =async () =>{
    try {
        const response= await axios.get("http://localhost:5000/countries");

        if (!response.data || !Array.isArray(response.data)) {
            throw new Error('Invalid response format or empty data.');
        }

        const interacioon = await response.data.map((count)=>{
        const country = {
            id:count.cca3,
            name:count.name.official,
            flag:count.flags?.png,
            continent:count.continents?.[0],
            capital:count.capital?.[0] || "country without capital",
            subregion:count.subregion,
            area:count.area,
            population:count.population
        }
        return country;
    });
    return interacioon;
    } catch (error) {
        throw new Error(`Error fetching or processing data: ${error.message}`);
    };

};

module.exports=getData;



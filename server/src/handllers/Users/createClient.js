const {Users} = require('../../db');
const bcryptjs = require('bcryptjs')

const createClient= async (req,res) =>{
try {
    const {name, lastName, nickName, edad, password}= req.body

    if(!name || !lastName || !nickName || !edad || !password){
        return res.status(400).json({message: "falta informacion necesaria"})
    }

    let passwordHash;
    try{
       passwordHash = await bcryptjs.hash(password,10);
    }catch(error){
        console.log("error al cifrar la contraseña");
        return res.status(500).json({ message: "Error interno del servidor" });
    }

    const newClient = await Users.create({
        name,
        lastName,
        nickName,
        edad,
        password: passwordHash,
        role:"customer"
    })

    res.status(200).json(newClient)
    
} catch (error) {
    console.error("Error al crear el cliente:", error.message);
        return res.status(500).json({ message: "Error interno del servidor" });
}
}

module.exports = createClient;
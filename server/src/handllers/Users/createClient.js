const {Users} = require('../../db');
const bcryptjs = require('bcryptjs')

const createClient= async (req,res) =>{
try {
    const {name, lastName, nickName, password,email}= req.body

    if(!name || !lastName || !nickName ||  !email || !password ){
        return res.status(400).json({message: "Todos los campos son requeridos"})
    }

    let passwordHash;
    try{
       passwordHash = await bcryptjs.hash(password,10);
    }catch(error){
        console.log("error al cifrar la contraseña");
        return res.status(500).json({ message: "Error interno del servidor" });
    }

    const existingEmail = await Users.findOne({ where: { email: email } });
    if (existingEmail) {
        return res.status(400).json({ message: "El correo electrónico ya está registrado." });
    }

    const existingNickName = await Users.findOne({ where: { nickName: nickName } });
    if (existingNickName) {
        return res.status(400).json({ message: "Nikname en uso." });
    }

    const newClient = await Users.create({
        name,
        lastName,
        nickName,
        email,
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
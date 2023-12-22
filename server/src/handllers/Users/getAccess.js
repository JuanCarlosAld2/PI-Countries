const {Users} = require('../../db');
const bcryptjs = require('bcryptjs')


//se debe enviar inofrmacion del usuario
const getAccess= async (req,res) =>{
try {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "All fields are required"});
    };

    const existingUser = await Users.findOne({ 
        where: { email: email },
        attributes: ['email', 'password']
    });

    if(!existingUser){
        return res.status(400).json({ message: "no user exists" });
    }
    let compare = bcryptjs.compareSync(password, existingUser.password)
    let access;
    if(compare){
        access = true
        return res.status(200).json({access})
    }else{
        access= false
        return res.status(200).json({access})
    }
    
} catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
}
}

module.exports = getAccess;
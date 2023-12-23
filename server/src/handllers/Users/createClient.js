const { Users, Role } = require('../../db');
const bcryptjs = require('bcryptjs');

const createClient = async (req, res) => {
    try {
        const { name, lastName, nickName, password, email, role } = req.body;

        if (!name || !lastName || !nickName || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }

        let passwordHash;
        try {
            passwordHash = await bcryptjs.hash(password, 10);
        } catch (error) {
            console.error("Error al cifrar la contraseña:", error);
            return res.status(500).json({ message: "Error al cifrar contraseña" });
        }

        const existingEmail = await Users.findOne({ where: { email: email } });

        if (existingEmail) {
            return res.status(400).json({ message: "El correo electrónico ya está registrado." });
        }

        const existingNickName = await Users.findOne({ where: { nickName: nickName } });
        if (existingNickName) {
            return res.status(400).json({ message: "Nickname en uso." });
        }

        const newClient = await Users.create({
            name,
            lastName,
            nickName,
            email,
            password: passwordHash,
        });

        if (role) {
            try {
                let existingRole = await Role.findOne({ where: { roles: role } });

                if (!existingRole) {
                    existingRole = await Role.create({ roles: role });
                }

                await newClient.setRoles([existingRole.id]); // Asignar el rol al usuario
            } catch (roleError) {
                console.error("Error al manejar roles:", roleError);
            }
        } else {
            try {
                let defaultRole;
                 defaultRole = await Role.findOne({ where: { roles: "Custom" } });
                
                if (defaultRole) {
                    await newClient.setRoles([defaultRole.id]); // Asignar el rol predeterminado al usuario
                } else {
                    console.error("Error no existe defaultRole")
                    //manejarlo con un res.status
                }
            } catch (defaultRoleError) {
                console.error("Error al manejar rol predeterminado:", defaultRoleError);
            }
        }
        //retornare token 
        res.status(200).json(newClient);
    } catch (error) {
        console.error("Error al crear el cliente:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = createClient;













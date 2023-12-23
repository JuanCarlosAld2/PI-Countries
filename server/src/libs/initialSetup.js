const {Role} = require ("../db")

const createRoles = async () =>{
    try {
        const count = await Role.count() 

        if(count === 0){
            const roles = [ 
                {roles:"Custom"},
                {roles:"Admin"},
            ]
            const values = await Role.bulkCreate(roles);
            console.log('Roles Creados:', values);
            return values;
        }else{
            console.log('Ya existen roles en la base de datos');
        }
    
    }catch (error){
        console.log('Error durante la carga de datos:', error);
    }
}  

module.exports = {
    createRoles
}


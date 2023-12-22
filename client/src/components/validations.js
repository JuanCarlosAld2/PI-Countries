
export const validatepassword = (data, setErrors, errors) => {
        const regexPass = /^(?=.*[0-9])/;
    if (!regexPass.test(data.password)) {
        setErrors({ ...errors, password: "Debe contener al menos un número" });
    } else if (data.password.length < 6 || data.password.length > 20) { // modifica el tamaño de la contraseña
        setErrors({
            ...errors,
            password: "La contraseña debe tener una longitud entre 6 y 10 caracteres",
        });
    } else {
        setErrors({ ...errors, password: "" });
    }
};

export const validateEmail = (data, setErrors, errors) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

    if (data.email.length < 1) {
        setErrors({ ...errors, email: "El Email está vacío" });
    } else if (data.email.length > 30) {
        setErrors({ ...errors, email: "El email es muy largo" });
    } else if (!regex.test(data.email)) {
        setErrors({ ...errors, email: "Email inválido" });
    } else {
        setErrors({ ...errors, email: "" }); // Clear the email error if it passes validation
    }

};

export const validateForm = (data,setErrors,errors) =>{

    if(data.name){
        if (data.name.length > 10) {
            setErrors({...errors, name: "el nombre es muy largo"})
        }else{
            setErrors({...errors, name:""})
        }
    }

    if(data.difficulty){
        if (data.difficulty < 1 || data.difficulty > 5 ){
            setErrors({...errors, difficulty:"la difcultad debe ser entre 1 y 5 "})
        }else{
            setErrors({...errors, difficulty:""})
        }
    }

    if(data.duration){
        if(data.duration < 30 || data.duration > 120){
            setErrors({...errors, duration:"la duracion no puede ser menor a 30 m ni mayor a 120 m"})
        }else{
            setErrors({...errors, duration: ""})
        }
    }
  


}


///podria ser asi 

//  export function validate3 (inputs){
//     const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
//     //const regexPass = /^(?=.*[0-9])/;
//     const errors = {}

//     if(!inputs.email){
//         errors.email="Debe haber un email"
//     }
//     else if(!inputs.password){
//         errors.password = "Debe haber un password"
//     }
//     else if(!regexEmail.test(inputs.email)){
//         errors.email = "debe ser un email valido"
//     }
//     return errors

// }




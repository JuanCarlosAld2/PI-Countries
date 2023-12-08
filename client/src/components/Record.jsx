import React from "react";
import { createUserCustom } from "../services/apiService"; // función para crear usuario
import style from "../styles/Record.module.css";
import { Formik, Form, Field,ErrorMessage } from 'formik';


export default function Record({ setRecord }) {

  //setea el estado de otro componente
    const handleReset = () => {
      setRecord(false); // establece el estado local de login 
    };

 

  const handleSubmit = (values, actions) => { //values y actions pertenecen a formik (estructura) 
    //console.log("Formulario de creación:", values);
    createUserCustom(values);

    actions.resetForm();//propiedad de formik para poenr los Field en ""

    setTimeout(() => { // funcion para crea un delay en la creacion de usuario
      setRecord(false);
    }, 3000);

  };

  const handleValidate = (values) => {
    const errores = {};
  
    if (!values.name) {
      errores.name = "Por favor ingresa un nombre.";
    } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(values.name)) {
      errores.name = "Solo debe contener letras y espacios.";
    }
  
    if (!values.lastName) {
      errores.lastName = "Por favor ingresa un apellido.";
    } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(values.lastName)) {
      errores.lastName = "Solo debe contener letras y espacios.";
    }
  
    if (!values.nickName) {
      errores.nickName = "Por favor ingresa un apodo.";
    } else if (/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]/.test(values.nickName)) {
      errores.nickName = "No debe contener números ni símbolos.";
    }
  
    if (!values.email) {
      errores.email = "Por favor ingresa un correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errores.email = "Ingresa una dirección de correo electrónico válida.";
    }
  
    if (!values.password) {
      errores.password = "Por favor ingresa una contraseña.";
    } else if (values.password.length < 6) {
      errores.password = "La contraseña debe tener al menos 6 caracteres.";
    } else if (
      !/(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}/.test(values.password)
    ) {
      errores.password =
        "La contraseña debe contener al menos un número, una letra mayúscula y un carácter especial.";
    }
  
    if (!values.password2) {
      errores.password2 = "Por favor confirma tu contraseña.";
    } else if (values.password !== values.password2) {
      errores.password2 = "Las contraseñas no coinciden.";
    }
  
    return errores;
  };
  
  

  return (
    <div className={style.contenedor}>
      <div className={style.titleDiv}>
        <h1>Forma Parte De Nuestra Agencia</h1>
      </div>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          nickName: '',
          email: '',
          password: '',
          password2: ''
        }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        <Form className={style.formulario}>
          <div className={style.formGroup}>
            <label htmlFor="name">Ingresa tu Nombre:</label>
            <Field type="text" id="name" name="name" placeholder="Nombre" className={style.input} />
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="lastName">Ingresa tu Apellido:</label>
            <Field type="text" id="lastName" name="lastName" placeholder="Apellido" className={style.input} />
            <ErrorMessage name="lastName" component="div" className={style.error} />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="nickName">Ingresa tu Apodo:</label>
            <Field type="text" id="nickName" name="nickName" placeholder="Apodo" className={style.input} />
            <ErrorMessage name="nickName" component="div" className={style.error} />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Ingresa Tu Email:</label>
            <Field type="email" id="email" name="email" placeholder="correo@correo.com" className={style.input} />
            <ErrorMessage name="email" component="div" className={style.error} />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="password">Ingresa tu Contraseña:</label>
            <Field type="password" id="password" name="password" placeholder="Contraseña" className={style.input} />
            <ErrorMessage name="password" component="div" className={style.error} />
            
          </div>

          <div className={style.formGroup}>
            <label htmlFor="password2">Confirma tu Contraseña:</label>
            <Field type="password" id="password2" name="password2" placeholder="Contraseña" className={style.input} />
            <ErrorMessage name="password2" component="div" className={style.error} />
          </div>

          <button type="submit" className={style.submitButton} >
            Registrarme
          </button>
          <button type="button" className={style.submitButton} onClick={handleReset}>
            Iniciar sesión
          </button>
        </Form>
      </Formik>
    </div>
  );
}


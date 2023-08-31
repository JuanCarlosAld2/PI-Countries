import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { useSelector,useDispatch} from 'react-redux';
import style from '../styles/NewActiviti.module.css'
import { createActivity,allactivities,allCharacters } from "../redux/actions";
import {validateForm} from './validations'


export default function NewActiviti (){
    const errorStyle = {
        color: "red",
    
      };
    const allCountries = useSelector((state)=>state.allCountries)
    const COubt = useSelector((state)=>state.countriesActivitis)//////////
    const dispatch =useDispatch();
 
   const  optionsCountries = allCountries.map((co)=>{
        return {
            value: co.id ,label:co.name
        }
    }) 

    const [countryData, setCountryData] = useState({
        id:"",
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        paises:[]
    })
      const[errors,setErrors]=useState({
        id:"",
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        paises:""
    })

    const [idCountry, setIdCountry]= useState([])
    
    const handleInputs = (e) => {
        const property = e.target.name;
        const value = property === "duration" ? Number(e.target.value) : e.target.value;
    
        setCountryData((prevData) => ({
            ...prevData,
            [property]: value,
        }));

        validateForm({ ...countryData, [property]: value },setErrors,errors)

    };

    const handleCountryChange = (selectedOptions) => {
        console.log(selectedOptions);
        setIdCountry(selectedOptions);
    };

    useEffect(() => {
        const newPaises = idCountry.map((e) => e.value);
        setCountryData((prevData) => ({
            ...prevData,
            paises: newPaises,
        }));
    }, [idCountry]);

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let idUnique= new Date() * Math.floor(Math.random() * 1000)
        setCountryData({...countryData,id:idUnique})
        await dispatch(createActivity(countryData))
        await dispatch(allactivities())
        await dispatch(allCharacters())
        setCountryData({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            paises:[]
        })
        setIdCountry([])
      
    
   

    }


    return(
       <form onSubmit={handleSubmit} className={style.formulario}>

            <div className={style.campo}>
                <label htmlFor="name">Ingresa una actividad:</label>
                <input type="text" placeholder="Name" name="name"value={countryData.name} onChange={handleInputs} />
            </div>
            <span style={errorStyle}>{errors.name}</span>

            <div className={style.campo}>   
                <label htmlFor="dificult">Grado de dificultad:</label>                
                <input type="number" name="difficulty" min="1" max="5" onChange={handleInputs} value={countryData.difficulty} />   
            </div>
            <span style={errorStyle}>{errors.difficulty}</span>

           <div className={style.campo}>
                <label htmlFor="duration">Duracion de la actividad en minutos:</label>
                <input type="text" name="duration" value={countryData.duration} onChange={handleInputs}/>
                
           </div>
           <span style={errorStyle}>{errors.duration}</span>

            <div className={style.campo}>
                <label htmlFor="season">Realizar actividade en temporada de:</label>
                
                <select name="season" onChange={handleInputs} value={countryData.season}>
                    <option value="DEFAULT" >Select Season</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
            </div>

            <div className={style.campo}>  
                <Select
                    options={optionsCountries}
                    isMulti
                    value={idCountry}
                    onChange={handleCountryChange} // Utiliza la función handleCountryChange para manejar las       selecciones
                    className={style.custom} // Asigna la clase CSS personalizada
                />
            </div>

            <div className={style.campo}>
                <button type="submit">Create</button>
            </div>
       </form>
    )
}
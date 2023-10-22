import React,{useState} from "react";
import { Link} from "react-router-dom";
import { useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {searchCounty,orderCountries,filterCountries,resetFilter, filterActivity} from '../redux/actions' //orderCountries
import style from '../styles/SearchBar.module.css' 

export default function SearchBar(){

    //Estado globales de redux
        const respaldoCountries = useSelector((state)=>state.respaldoCountries);
        const activities2 = useSelector((state)=>state.activitiesAll);
    
    //Estado local
        const [idName, setIdName] = useState("");

    //hooks
        const dispatch = useDispatch();
        const navigate = useNavigate();
        
        
    //gerarar opciones de filtrado

        //Por continente
                 //Gera un array con contienentes unicos (no permite repetidos)
            const uniqueContinents = [...new Set(respaldoCountries.map((e) => e.continent))];
            const optionsByContienet = uniqueContinents.map((continent) => (
                <option value={continent} key={continent}>
                    {continent}
                </option>
            ));


        //Por actividad 
            const optionsByActivities = activities2.map((e) => (
                <option value={e.name} key={e.id}>
                    {e.name}
                </option>
            ));

    

    
    //Manjadores (handlers)

        const hanleChange = (e) => { // 
            setIdName(e.target.value)
        }

        const handleButtonSearch = (e) =>{
            e.preventDefault()
            if(!idName)return null
            if(Number(idName)){
                alert("El nombre debe ser una cadena de texto")
            }else{
                dispatch(searchCounty(idName))
                navigate('/countries')
            }
        }

        const handleOrder = (e) =>{
            const selectedOrder = e.target.value;
            dispatch(orderCountries(selectedOrder))
        }   

        const filterByContient = (e) =>{
            dispatch(filterCountries(e.target.value))
        }

        const handleReset = () =>{
            dispatch(resetFilter())
        }


        const handleActivities = (e) =>{
            dispatch(filterActivity(e.target.value))
        }
    
    return(
        <nav className={style.barranavegacion}>
            <div>
                <input type="search" name="name" id="name" value={idName} onChange={hanleChange} />
                <button onClick={handleButtonSearch}>SearchCountry</button>

                <Link to='/home'>
                    <button>home</button>
                </Link>
                <Link to='/activiti'>
                    <button>Create Activity</button>
                </Link>

                <select name="order" onChange={handleOrder}>
                    <option value="DEFAULT">Select Order</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                    <option value="PA">Poblacion Acendente</option>
                    <option value="PD">Poblacion Descendente</option>
                </select>

                <select name="filter" onChange={filterByContient}>
                    <option value="DEFAULT">filter by continent</option>
                    {optionsByContienet}
                </select>
                


                <select name="activities" onChange={handleActivities} >
                    <option value="DEFAULT">select Activity</option>
                    {optionsByActivities}
                </select>
                <button onClick={handleReset}>ResetAplication</button>
            </div>       
        </nav>
    )
}
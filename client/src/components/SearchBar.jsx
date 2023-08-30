import React,{useState} from "react";
import { Link} from "react-router-dom";
import { useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {searchCounty,orderCountries,filterCountries,resetFilter, filterActivity} from '../redux/actions' //orderCountries
import style from '../styles/SearchBar.module.css' 

export default function SearchBar(){
    const allCountries = useSelector((state)=>state.allCountries)
    const uniqueContinents = [...new Set(allCountries.map((e) => e.continent))];
    const options = uniqueContinents.map((continent) => (
        <option value={continent} key={continent}>
            {continent}
        </option>
    ));

    const activities2 = useSelector((state)=>state.activitiesAll)
    // const uniqueContinents2 = [...new Set(activities2.map((e) => e.name))];
    const options2 = activities2.map((e) => (
        <option value={e.id} key={e.id}>
            {e.name}
        </option>
    ));

    const countriesActivities = useSelector((state)=>state.countriesActivities)
    

    const [idName, setIdName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const hanleChange = (e) => {
        setIdName(e.target.value)
    }

    const handleButton = (e) =>{
        e.preventDefault()
        if(!idName)return null
        if(Number(idName)){
            alert("must be the name of a country")
        }else{
            dispatch(searchCounty(idName))
            navigate('/countries')
        
        }
    }

    const handleOrder = (e) =>{
        const selectedOrder = e.target.value;
        dispatch(orderCountries(selectedOrder))
    }

    const handleFilter = (e) =>{
        dispatch(filterCountries(e.target.value))
    }

    const handleReset = () =>{
        dispatch(resetFilter())
    }


    const handleActivities = (e) =>{
        // console.log(e.target.value);
        console.log("yaqu",countriesActivities);
        dispatch(filterActivity(e.target.value))
    }
    
    return(
        <nav className={style.barranavegacion}>
            <div>
                <input type="search" name="name" id="name" value={idName} onChange={hanleChange} />
                <button onClick={handleButton}>SearchCountry</button>
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

                <select name="filter" onChange={handleFilter}>
                    <option value="DEFAULT">filter by continent</option>
                    {options}
                </select>
                <button onClick={handleReset}>Reset Filter</button>


                <select name="activities" onChange={handleActivities} >
                    <option value="DEFAULT">select Activity</option>
                    {options2}
                </select>
            </div>       
        </nav>
    )
}
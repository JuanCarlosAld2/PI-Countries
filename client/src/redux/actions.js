import { All_CHARACTERS,ID_COUNTRY, CLEAN_DETAIL,SEARCH_COUNTRY,CLEAN_COUNTRIES,ORDER,FILTER,RESET,ALLACTIVITIES,FILTER_ACTIVITY,ACTIVITIES_INDIVIDUAL} from './actionsTypes'

import axios from 'axios';



export const allCharacters = () =>{
    return async (dispatch) =>{
        try {
            const path= "http://localhost:3001/countries"
            const {data}= await axios(path)
            return dispatch({
                type: All_CHARACTERS,
                payload: data
            });
            
        } catch (error) {
            console.log("no se cargo data", error.message)
        }
     
    };
};

export const getCountriesDetail= (id)=>{
    return async (dispatch)=>{
        try {
               const path = 'http://localhost:3001/countries/'
        const {data} = await axios(`${path}${id}`)
       // console.log(data);
          if(data){
            dispatch({type:ID_COUNTRY, payload:data})
          }
        } catch (error) {
            console.log("No exite ciudad",error.message);
        }
     

    }
}

export const cleanDetail = () =>{
    return {
        type:CLEAN_DETAIL
    }
}

export const searchCounty = (idname) => {
    return async (dispatch) => {
        try {
            const URL ="http://localhost:3001/countries/name";
            const {data} = await axios(`${URL}?name=${idname}`)
            if(data){ // data es un [] vacio o lleno 
                dispatch({
                    type:SEARCH_COUNTRY,
                    payload:data

                })
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const cleanCountries = () =>{
    return {
        type:CLEAN_COUNTRIES
    }
}



//trabajar en esta 
export const createActivity = (activity) =>{
    return async (dispatch)=>{
        try {
             const URL = "http://localhost:3001/activities/"
              await axios.post(URL,activity)
            alert("datos creados");
        } catch (error) {
            console.log(error.message);
        }
    }
}


export const orderCountries = (orden) =>{
    return{
        type:ORDER,
        payload:orden
    }
}


export const filterCountries = (filtro) =>{
    return {
        type: FILTER,
        payload:filtro,
    }
}

export const resetFilter = () =>{
    return{
        type:RESET
    }
}

export const allactivities =  () =>{
    return async (dispatch)=>{  
        const URL= "http://localhost:3001/activities/"
        const {data} = await axios(URL)
         //console.log("$$$",data);//esta bien
        dispatch({type: ALLACTIVITIES, payload:data})


    }
}

export const idActivity =  (id) => {
return async (dispatch) =>{
    const URL = "http://localhost:3001/countries/"
    const {data}= await axios(`${URL}${id}`)
    dispatch({type:ACTIVITIES_INDIVIDUAL, payload:data})
}
}


export const filterActivity = (id) => {
return {
    type: FILTER_ACTIVITY,
    payload:id
}
}







/*


*/








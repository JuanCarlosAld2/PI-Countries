import { All_CHARACTERS,ID_COUNTRY, CLEAN_DETAIL} from './actionsTypes'

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
        console.log(data);
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

/*
  fetch(`http://localhost:3001/rickandmorty/character/${id}`)//cambiar a https://rickandmortyapi.com/api/character/${id} en caso de fallo 
        .then(response => response.json())
        .then(( data ) => {
            if (data.name) dispatch({type:GET_CHARACTER_DETAIL,payload:data})
        })
*/
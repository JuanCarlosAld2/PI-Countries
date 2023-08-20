import { All_CHARACTERS,ID_COUNTRY, CLEAN_DETAIL} from './actionsTypes'

const initialState = {
    allCountries:[],
    countryDetail:{},
}

const rootReducer = (state= initialState,{type, payload}) =>{
    switch (type) {
      case All_CHARACTERS:
        return{
            ...state,
            allCountries: payload
        }
        case ID_COUNTRY:
            return{
                ...state,
                countryDetail:payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                countryDetail:{}
            }
    
        default:
            return {...state}
    }
}



export default rootReducer;
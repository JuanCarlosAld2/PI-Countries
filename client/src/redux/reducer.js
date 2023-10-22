import { All_CHARACTERS,ID_COUNTRY, CLEAN_DETAIL,SEARCH_COUNTRY,CLEAN_COUNTRIES, ORDER,FILTER, RESET,ALLACTIVITIES,FILTER_ACTIVITY,ACTIVITIES_INDIVIDUAL} from './actionsTypes'

const initialState = {
    allCountries:[],
    respaldoCountries:[],
    countryDetail:{},
    countriesByName:[],
    activitiesAll:[],
    showActivity:[]
}

const rootReducer = (state= initialState,{type, payload}) =>{
    switch (type) {
      case All_CHARACTERS:
        return{
            ...state,
            allCountries: payload,
            respaldoCountries:payload
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
        case SEARCH_COUNTRY:
            return{
                ...state,
                countriesByName:payload
            }
        case CLEAN_COUNTRIES:
            
            return{
                ...state,
                countriesByName:[]
            }
            case ORDER:
                
                let ordenAll = [...state.allCountries];
                let ordenSearch=[...state.countriesByName]
                if(payload === "DEFAULT"){
                    ordenAll = [...state.respaldoCountries]
                }else if (payload === "A") {
                    ordenAll.sort((a, b) => a.name.localeCompare(b.name));
                    ordenSearch.sort((a, b) => a.name.localeCompare(b.name));
                } else if (payload === "D") {
                    ordenAll.sort((a, b) => b.name.localeCompare(a.name));
                    ordenSearch.sort((a, b) => b.name.localeCompare(a.name));
                } else if (payload === "PA") {
                    ordenAll.sort((a, b) => a.population - b.population);
                    ordenSearch.sort((a, b) => a.population - b.population);
                } else if (payload === "PD") {
                    ordenAll.sort((a, b) => b.population - a.population);
                    ordenSearch.sort((a, b) => b.population - a.population);
                }
                return {
                    ...state,
                    allCountries: ordenAll,
                    countriesByName:ordenSearch
                    
                };
            case FILTER:
                let newFilter = [...state.respaldoCountries];
                if (payload !== "DEFAULT") {
                    newFilter = newFilter.filter((el) => el.continent === payload);
                }
                return{
                    ...state,
                    allCountries:newFilter
                }
            case RESET:
                return{
                    ...state,
                    allCountries:state.respaldoCountries
                }
            case ALLACTIVITIES:
                return {
                    ...state,
                    activitiesAll:payload

                }
                case FILTER_ACTIVITY:
                    // eslint-disable-next-line no-case-declarations
                    const filtered = state.respaldoCountries.filter((country) => {
                      if (country.Activities.length > 0) {
                        const filter2 = country.Activities.filter((el) => el.name === payload);
                        return filter2.length > 0; // Devuelve true si hay actividades que coinciden
                      }
                      return false; // No hay actividades, no se incluirá el país en el resultado
                    });
                    
                    return {
                      ...state,
                      allCountries: filtered,
                    };   
                case ACTIVITIES_INDIVIDUAL:
                    const filterAct= payload.Activities.map((e)=>e)
                    return{
                        ...state,
                        showActivity:filterAct
                    }
            default:
            return {...state}
    }
}



export default rootReducer;
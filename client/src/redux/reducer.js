import { All_CHARACTERS,ID_COUNTRY, CLEAN_DETAIL,SEARCH_COUNTRY,CLEAN_COUNTRIES, ORDER,FILTER, RESET,ALLACTIVITIES,COUNTRY_ACTIVITY,FILTER_ACTIVITY} from './actionsTypes'

const initialState = {
    allCountries:[],
    respaldoCountries:[],
    countryDetail:{},
    countriesByName:[],
    activitiesAll:[],
    countriesActivities:[]
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
                    const newFilter= state.allCountries.filter((el)=> el.continent === payload);
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
            case COUNTRY_ACTIVITY:
                return{
                    ...state,
                    countriesActivities:[...state.countriesActivities,payload]
                }
            case FILTER_ACTIVITY:
                // eslint-disable-next-line no-case-declarations
                const filteredCountriesActivities = state.countriesActivities.filter((country) =>
                    country.activities.some((activity) => activity.id === payload)
                );
                    
                    console.log(filteredCountriesActivities); // Este log muestra los países que tienen la actividad con el ID dado
                    
                    return {
                      ...state,
                      allCountries: filteredCountriesActivities,
                    };
                  
        default:
            return {...state}
    }
}



export default rootReducer;
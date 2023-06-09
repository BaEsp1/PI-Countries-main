import {
        GET_COUNTRIES,
        GET_DETAIL,
        GET_COUNTRY,
        ORDER_ASC,
        ORDER_POA,
        FIL_CONTINENT,
        FIL_ACTIVITY,
        GET_ACTIVITIES,
} from "./ActionName"

const initialState = {
        countries : [],
        detail: [],
        actividades: [],
        activity: [],
        error:"",
};

const rootReducer = (state = initialState, action) => {
switch(action.type) {
        case GET_COUNTRIES: {
                return { 
                        ...state,
                        countries:action.payload,
                        };
                }
        case GET_COUNTRY: {
                return { 
                        ...state,
                        countries:action.payload,
                        };
                }
        case GET_DETAIL: {
                return { 
                        ...state,
                        detail: action.payload,
                }; 
                }
        case ORDER_ASC: {
                let orderCountries = action.payload ==='asc' 
                ? state.countries.sort(function (a, b) {
                        if (a.name > b.name) return 1;
                        if (b.name > a.name)  return -1
                        return 0;
                        }) 
                : state.countries.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (b.name > a.name) return 1;
                        return 0;
                })
        return {
                ...state,
                countries: orderCountries,
                }
        }
        case ORDER_POA: {
                const orderPopulation = action.payload === 'POA' ?
                state.countries.sort(function (a, b) {
                        if (a.population > b.population) return -1;
                        if (b.population > a.population)  return 1;
                        return 0;
                }) :
                state.countries.sort(function (a, b) {
                        if (a.population > b.population) return 1;
                        if (b.population > a.population) return -1;
                        return 0;
                })
        return {
                ...state,
                population: orderPopulation
                }
                }
        case FIL_CONTINENT: {
                return {
                        ...state,
                        countries: state.countries.filter((c) => c.continent === action.payload)
                };
        }
        case FIL_ACTIVITY:{
                return {
                        ...state,
                        countries: state.countries.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)
                        
                        })
                }
        }
        case GET_ACTIVITIES:{
                return{
                        ...state,
                        actividades: action.payload
                }
        }
        default:
                return state;
        }
};

export default rootReducer;

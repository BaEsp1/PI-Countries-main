import {
        GET_COUNTRIES,
        GET_DETAIL,
        ORDER_ASC,
        ORDER_DSC,
        ORDER_POA,
        ORDER_POD,
        FIL_CONTINENT,
        FIL_ACTIVITY,
        GET_ACTIVITIES,
        FAILURE,
        GET_COUNTRY,
} from "./ActionName"

const initialState ={
        countries : [],
        detail: [],
        activity: [],
        error:"",
        allContinents:[],
        actividades: [],
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
                return { 
                        ...state,
                        countries: state.countries.slice().sort(
                                (a , b) =>{
                                        if(a.name < b.name) return -1
                                        if(b.name < a.name) return 1 
                                        return 0
                                }
                                )
                        };
                }
        case ORDER_DSC: {
                return { 
                        ...state,
                        countries: state.countries.slice().sort(
                                (a , b) =>{
                                        if (a.name > b.name) return 1
                                        if (b.name > a.name) return -1
                                        return 0;
                                }
                        )
                }; }
        case ORDER_POA: {
                return { 
                        ...state,
                        countries: state.countries.slice().sort(
                                (a, b) =>{
                                        if (a.population > b.population) return 1
                                        if (b.population > a.population) return -1;
                                        return 0;
                                }
                        ),
                };
                }
        case ORDER_POD: {
                return { 
                        ...state,
                        countries: state.countries.slice().sort(
                                (a, b) =>{
                                        if (a.population > b.population) return -1
                                        if (b.population > a.population) return 1;
                                        return 0;
                                }
                                ),
                        };
                }
        case FIL_CONTINENT: {
        const allC = state.allContinents;
        const filtroConti = action.payload === "All" ? allC : allC.filter(i => i.contintents === action.payload)
                return {
                        ...state,
                        countries: filtroConti
                };
        }
        case FIL_ACTIVITY:{
                return {
                        ...state,
                        countries: state.countries.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)
                           
                        })
                }

        // const allA = state.actividades;
        // const filtroActi = action.payload === "All" 
        //                                         ? allA 
        //                                         : allA.filter(c => {return c.activities.some((e) => e.name === action.payload)})
        //         return { 
        //                 ...state,
        //                 countries: filtroActi
        //         };
        }
        case GET_ACTIVITIES:{
                return{
                        ...state,
                        actividades: action.payload
                }
        }
        case FAILURE:{
                return {
                        ...state,
                }
        }
        default:
                return state;
        }
};

export default rootReducer;
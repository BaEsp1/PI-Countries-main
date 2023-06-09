import axios from "axios";
import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_COUNTRY,
    ORDER_ASC,
    ORDER_POA,
    FIL_CONTINENT,
    FIL_ACTIVITY,
    GET_ACTIVITIES,

} from "./ActionName";

const URL = "http://localhost:3001";

// GET paises y GET detail:
export function getCountries() {
    return async function(dispatch){
        try {
            const respBack = await axios.get(URL + "/countries")
            return dispatch({
                type: GET_COUNTRIES,
                payload: respBack.data,
            })
        } catch (error) {
            console.log(error)
        }
    }

};

export function getDetail(id) {
    return async function (dispatch){
        try {
            const back = await axios.get( `${URL}/countries/${id}`)
            return dispatch ({
                type: GET_DETAIL,
                payload: back.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getCountry(name) {
    return async (dispatch) => {
            try {
            const res = await axios.get(URL +`/countries?name=${name}`
                );
                dispatch({
                    type:GET_COUNTRY,
                    payload: res.data
                })

            } catch (error) {
                console.log(error)
                alert("country no found , try again")
        }}
    }


// Ordenar asc y desc por nombre alfabetico de paises y canti de poblacion
export function orderASC(name) {
    return {type : ORDER_ASC ,
            payload:name, 
            }
};


export function orderPOA(payload) {
    return {type : ORDER_POA ,
            payload,
            }
};


// Filtrar por continente y por actividad turistica:

export const filContinent = (payload) => {
    return {
        type: FIL_CONTINENT,
        payload,
    };
};
    
export function filActivity (payload) {
    return {
        type: FIL_ACTIVITY,
        payload,
    };  
};

//POST y GET activity
export function postActivity(activity) {
    return async function(){
        try {
            const newAct = await axios.post(URL+"/activities",activity);
            console.log(newAct);
        } catch (error) {
            console.log(error)
            alert("Please complete all fields")
        }
        }

};

export function getActivities () {

    return async function(dispatch){
        try {
            const respBack = await axios.get(URL+"/activities")
            return dispatch({
                type: GET_ACTIVITIES,
                payload:respBack.data,
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }
};

import axios from "axios";
import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_COUNTRY,
    ORDER_ASC,
    ORDER_DSC,
    ORDER_POA,
    ORDER_POD,
    FIL_CONTINENT,
    FIL_ACTIVITY,
    GET_ACTIVITIES,
    FAILURE,
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
            return dispatch({
                type:FAILURE,
                payload: error.response.data.msg
            });
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
        if(name < 3){
            try {
                const res = await axios.get(URL +`/countries/${name}`
                );
                dispatch({
                    type:GET_COUNTRY,
                    payload: res.data
                })
            } catch (error) {
                throw new Error(error)
                }
        } else {
                try {
                const res = await axios.get(URL +`/countries?name=${name}`
                );
                dispatch({
                    type:GET_COUNTRY,
                    payload: res.data
                })
            } catch (error) {
                dispatch({
                    type:FAILURE,
                    payload: error.response.data.msg
                })
        }}
    }

}
// Ordenar asc y desc por nombre alfabetico de paises y canti de poblacion
export function orderASC() {
    return {type : ORDER_ASC , 
           }
};
export function orderDSC() {
    return {type : ORDER_DSC , 
           }
};

export function orderPOA() {
    return {type : ORDER_POA , 
            }
};
export function orderPOD() {
    return {type : ORDER_POD , 
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
            throw new Error(error.message);
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
            return dispatch({
                type:FAILURE, 
                payload: error.response.data.msg
            });
        }
    }
};

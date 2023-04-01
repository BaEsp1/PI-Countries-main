import axios from "axios";
import { GET_ACTIVITY , GET_COUNTRIES ,BY_ORDER,BY_POPULATION,BY_CONTINENT, GET_DETAIL,BY_ACTIVITY,FAILURE,LOADING} from "./ActionName";

const URL = "http://localhost:3001";

export function getCountries() {
     return async function(dispatch){
        try {
            const respBack = await axios.get(URL+"/countries")
            return dispatch({
                type: GET_COUNTRIES,
                payload:respBack.data,
            })
        } catch (error) {
            return dispatch({type:"ERROR", payload: error});
        }
     }

};

export function getDetail(id) {
    return async function (dispatch){
        try {
            const back = await axios.get(URL + "/countries/:", id)
            return dispatch ({
                type:GET_DETAIL,
                payload: back.data,
            })
        } catch (error) {
            return dispatch({type: "ERROR", payload: error});
        }
    }
};


export function byOrder(id) {
    return {type : BY_ORDER , 
            payload : id}
};


export function byPopulation() {
    
};

export function byContinent() {
    
};

export function byActivity () {

};

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

export function getActivity () {

    return async function(dispatch){
        try {
            const respBack = await axios.get(URL+"/activities")
            return dispatch({
                type: GET_ACTIVITY,
                payload:respBack.data,
            })
        } catch (error) {
            return dispatch({type:"ERROR", payload: error});
        }
        }
};

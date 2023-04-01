import {
    GET_COUNTRIES,
    GET_DETAIL,
    BY_CONTINENT,
    BY_ODER,
    BY_POPULATION,
    GET_ACTIVITY,
    BY_ACTIVITY,
    FAILURE,
    LOADING
} from "./ActionName"

const initialState ={

};

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
            case GET_COUNTRIES:
                    return { };
            case GET_DETAIL:
                    return { }; 
             case BY_CONTINENT:
                    return { };
            case BY_ODER:
                    return { }; 
            case BY_POPULATION:
                    return { };
            case GET_ACTIVITY:
                    return { };
            case BY_ACTIVITY:
                    return { };
            case FAILURE:
                    return { };
            case  LOADING:
                return {};
            default:
                    return state;
}
};

export default rootReducer;
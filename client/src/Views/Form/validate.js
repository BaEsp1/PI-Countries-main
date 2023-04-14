function validate (userData) {

    let errors = {};           
    if(!userData.name){
        errors.name = 'This field can not be blank';
    }

    if(!userData.difficulty){
        errors.difficulty = 'You must select a difficulty';
    }

    if(!userData.season){
        errors.season = 'You must select a season';
    }

    if(userData.idPais === [ ]){
        errors.idPais = 'The activity must contain one country'
    }
    return errors
};

export default validate;
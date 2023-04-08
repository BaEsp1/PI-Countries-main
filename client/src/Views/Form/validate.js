function validate (userData) {

    let errors = {};           
    if(!userData.name){
        errors.name = 'This field can not be blank';
    }

    if(userData.duration === ""){
        errors.duration = 'You must select a duraction';
    }

    if(userData.dificulty === ""){
        errors.dificulty = 'You must select a difficulty';
    }

    if(userData.season === ""){
        errors.season = 'You must select a season';
    }

    if(userData.countries.length < 3 || !userData.countries){
        errors.countries = 'The activity must contain at least one country'
    }
    return errors
};

export default validate;
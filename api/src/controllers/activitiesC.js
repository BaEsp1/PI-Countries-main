const { Activity, Country } = require('../db');

// ME TRAE TODAS LAS ACTIVIDADES
async function getActivities(req, res) {
    try {
        const allActivities = await Activity.findAll({ include: Country })
    // filtro que crea una nueva lista que contiene solo los elementos únicos (Front)
    const filterA = allActivities.map(e => e.name.toLowerCase())
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
        res.status(200).json(total)
        
    } catch (error) {
        res.status(401).send(error.message)
    }
};

// CREO ACTIVIDADES:

const createActivity = async (name, difficulty, duration, season, idPais) => {
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        }) 
        await newActivity.addCountry(idPais)
        console.log("the activity "+ name +"has been added to "+ idPais);
    } catch (error) {
        console.log(error);
    }
}

const postActivity = (req, res) => {
    const { name, difficulty, duration, season, idPais } = req.body;

    if(name && difficulty && duration && season && idPais){
        idPais.forEach((e) =>{
            createActivity(name, difficulty, duration, season, e)
        })

        return res.status(201).json({
            msg: `the activity '${name}' has been created`
        });
    }
    else{
        return res.status(400).send({
            msg: "Some fields are missing"
        })
    }
}

module.exports = {getActivities, postActivity};
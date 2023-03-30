const { Activity, Country } = require('../db');

// ME TRAE TODAS LAS ACTIVIDADES
async function getActivities(req, res) {

    try {
        const allActivities = await Activity.findAll({ include: Country })
        //filtro para el front que trae todas las actividades
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

const postActivity = async (req, res) => {
    const { name, difficulty, duration, season, idPais } = req.body
    try {
        const newActivity = await Activity.create({
            name : name,
            difficulty : difficulty,
            duration : duration,
            season: season,
            idPais
        });
        newActivity.addCountry(idPais)
        res.status(201).json(newActivity)
    } catch (e) {
        res.status(500).send(e.message);
    }
}



module.exports = {getActivities, postActivity};
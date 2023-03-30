const { Country, Activity } = require('../db');


// QUIERO QUE ME TRAIGA TODA LA INFO :   GET /   y GET /name 
async function getCountries (req, res) {
    const { name } = req.query

    const allCountries = await Country.findAll({
                    include: Activity
                })

    if (name) {
        const byName = await allCountries.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase()))
        byName.length ?
            res.json(byName) :
            res.status(404).send({ 'msg': 'Not found' })
    } else {
        res.json(allCountries)
    }
};

// ME TRAE INFO BY ID
async function  getCountriesByID (req, res) {
    const { id } = req.params;
    let countries

    try {
        if (id.length > 1) {
            countries = await Country.findByPk(id, { include: Activity })

            countries = {
                id: countries.id,
                name: countries.name,
                image: countries.image,
                continent: countries.continent,
                capital: countries.capital,
                subregion: countries.subregion,
                area: countries.area,
                population: countries.population,
                activities: countries.activities.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        difficulty: e.difficulty,
                        duration: e.duration,
                        season: e.season
                    }
                })
            }
        }
        res.json(countries)
    } catch (error) {
        res.status(401).send("No se ha encontrado un pais con ese ID")
    }
}

module.exports = {getCountries, getCountriesByID}
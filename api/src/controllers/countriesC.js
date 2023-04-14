const { Country, Activity } = require('../db');


// QUIERO QUE ME TRAIGA TODA LA INFO :   GET /   y GET /name 
async function getCountries (req, res) {
    const { name } = req.query

    try {
        const allCountries = await Country.findAll({
                        include: Activity
                    })
    
        if (name) {
                const byName = await allCountries.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase()))
                byName.length 
                ? res.status(200).json(byName) 
                : res.status(404).send({ 'msg': 'Not found' })
            } else {
                res.status(200).json(allCountries)
            }
        
    } catch (error) {
        res.status(400).send(error)
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
                flags: countries.flags,
                continent: countries.continent,
                capital: countries.capital,
                region: countries.region,
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
        res.status(200).json(countries)
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = {getCountries, getCountriesByID}
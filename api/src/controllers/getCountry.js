// const axios = require("axios");
// const URL = "https://";

// async function getCountById(req , res){
//     const {id} = req.params;

//     try {
//         const response = await axios(URL + id)
//         const count = {
//             id: response.data.id,
//             name: response.data.name,
//             capital:response.data.capital,
//             flags:response.data.image,
//         };
//         res.status(200).json(count)

//     } catch (error) {
//         res.status(404).send(error.message)
//     }
// };


// // const axios = require("axios");
// // const URL = "https://";

// const getCountDetail = async (req , res) => {
//     const {detailId} = req.params;

//     if(detailId){

//         try {
//             const response = await axios( URL + detailId)
//             const countDetail = {
//                 id: response.data.id,
//                 name: response.data.name,
//                 capital: response.data.capital,
//                 continent: response.data.continent,
//                 subRegion: response.data.subRegion,
//                 region:response.data.region,
//                 area: response.data.area,
//                 population: response.data.population,
//                 flags: response.data.image,
//             }
//             return res.status(200).json(countDetail)

//         } catch (error) {
//             return res.status(500).send(error.message)

//         }
//     } else {
//             return res.status(500).send("Debes proveer un Id por parametro")
//             }
// };

// module.exports = {getCountDetail}

const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
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
});

router.get('/:id', async (req, res, next) => {
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
        next(error)
    }
});

module.exports = router;
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

const crearActividad = async (name, difficulty, duration, season, idPais) => {
    try {
        const act = await Activity.create({
            name,
            difficulty,
            duration,
            season
        }) 
        await act.addCountry(idPais)
        console.log("Actividad: "+ name +" agregada al pais "+ idPais);
    } catch (e) {
        console.log(e);
    }
}

const postActivity = (req, res) => {
    const { name, difficulty, duration, season, idPais } = req.body;

    if(name && difficulty && duration && season && idPais){
        idPais.forEach((e) =>{
            crearActividad(name, difficulty, duration, season, e)
        })

        return res.status(201).json({
            msg: `Actividad '${name}' creada correctamente!`
        });
    }
    else{
        return res.status(400).send({
            msg: "Faltan algunos campos para agregar la actividad"
        })
    }
}







// const postActivity = async (req, res, next) => {
//     const { name, difficulty, duration, season, idPais } = req.body
//     try {
//         let activity = await Activity.create({ name, difficulty, duration, season })
//         await activity.setCountries(idPais)

//         let activityWithCountry = await Activity.findOne({
//             where: { name: name },
//             attributes: {
//                 exclude: ['updatedAt', 'createdAt'],
//             },
//             include: {
//                 model: Country,
//                 through: {
//                     attributes: []
//                 }
//             }
//         })
//         res.status(201).json(activityWithCountry)
        
//     } catch (e) {
//         res.status(500).send(e.message);
//         next(e)
//     }
// }


// const postActivity = async (req, res) => {
//     const { name, difficulty, duration, season, idPais } = req.body
//     try {
//         const newActivity = await Activity.create({
//             name : name,
//             difficulty : difficulty,
//             duration : duration,
//             season: season,
//             idPais
//         });
//         newActivity.addCountries(idPais)
//         res.status(201).json(newActivity)
//     } catch (e) {
//         res.status(500).send(e.message);
//     }
// }

module.exports = {getActivities, postActivity};
const { Router } = require('express');
const  getCountry = require('../controllers/getCountry');
const  getActivity  = require('../controllers/getActivity');
//const {activity , country }  = require ("../db")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', getCountry);
router.use('/activity', getActivity);

// router.get("/all", async (req, res) =>{
//     try {
//         const allCoun = await getApiData(); // GUARDAR APIDATA
//         await Country.bulkCreate(allCoun);
//         return res.json(allCoun);
//     } catch (error) {
//         return res.send(error);    
//     }
// });

// router.get("alldb", async (req, res) =>{
//     try {
//         const info = await Country.findAll();
//         return res.json(info);
//     } catch (error) {
//         return res.send(error);
//     }
// });

module.exports = router;

const { Router } = require('express');
const  countriesR = require('../routes/countriesR');
const  activitiesR  = require('../routes/activitiesR');
//const {activity , country }  = require ("../db")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesR);
router.use('/activities', activitiesR);

module.exports = router;

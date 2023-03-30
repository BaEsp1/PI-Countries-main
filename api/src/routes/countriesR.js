const { Router } = require('express');
const { getCountries, getCountriesByID} = require('../controllers/countriesC')
const router= Router();

router.get('/', getCountries)
router.get('/:id', getCountriesByID )

module.exports = router;
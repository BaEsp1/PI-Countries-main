const { get } = require('superagent');
const { Country } = require('../db');
const axios = require('axios');

 async function getData () {
    const allCountries = Country.findAll();
    if(!allCountries.length){
    const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
    var apiCountries = apiCountriesResponse.data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        flags: e.flags[0],
        continent: e.continents[0],
        capital: e.capital ? e.capital[0] : 'Not found',
        region:e.region,
        area: e.area,
        population: e.population
      }
    })
        await Country.bulkCreate(apiCountries);
        console.log('creado')
  }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  }

  module.exports = {getData};
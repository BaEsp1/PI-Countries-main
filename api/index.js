const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getData} = require('./src/controllers/saveData.js');

// Syncing all the models at once.
console.log('Iniciando la aplicación');
conn.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    server.listen(3001, async () => {
      console.log('Servidor ON');
      getData();
    });
  })
  .catch((error) => {
    console.error('Error sincronizando la base de datos:', error);
  });

/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});


////////////////////////////// Testing ///////////////////////////////////
const router = require('../../src/routes/index.js')

describe("Testing Back-end : Routes - Activity",() =>{

it(' GET /activities return activities',  () =>
    agent.get('/activities').expect(200)
);

it(' POST /activities only run whith params', async() =>{
  agent.post('/activities').expect(400)
  agent.post('/activities?name=Caminata&difficulty=4&duration=60&season=winter').expect(201)
})
});

describe("Testing Back-end: Route - Country", () =>{

  it (' GET /countries=name? run ', () => {
    agent.get("/countries=name?Arg").expect(200)
    agent.get("/countries=name?365").expect(Error)
  })

  it (' GET /countries/:id run ', () => {
    agent.post("/countries/ARG").expect(200)
    agent.post("/countries/341").expect(400)
  })
});


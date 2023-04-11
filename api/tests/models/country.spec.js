const { Country, conn , Activity} = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});

/////////////////////////// TESTING ///////////////////////////

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if country is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activity.create({ name: 'run' });
      });
    });
  });
});
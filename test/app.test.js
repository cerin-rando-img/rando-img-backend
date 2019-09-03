require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Pokemon = require('../lib/models/Pokemon');


describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('get a pokemon by id', async() => {
    const pokemon = await Pokemon.create({ pokemon: 'venusaur' });
    return request(app)
      .get(`/api/v1/pokemon/${pokemon._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          pokemon: 'venusaur',
          __v: 0
        });
      });   
  });
});

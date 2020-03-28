const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ONG",
        email: "ong@gmail.com",
        whatsapp: "46999093981",
        city: "Pato Branco",
        uf: "PR"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  afterAll(async () => {
    await connection.destroy();
  });
});
const request = require('supertest');
const app = require('../app');

let server;
let port;

beforeAll(() => {
  server = app.listen(0); // Automatically assign an available port
  port = server.address().port;
});

afterAll(async () => {
  await server.close(); // Ensure server closes asynchronously
});

describe('API Endpoints', () => {
  it('should return Hello World on /home', async () => {
    const res = await request(`http://localhost:${port}`).get('/home');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello, World to you! Welcome to the world of programming.');
  });

  it('should return user data on /user', async () => {
    const res = await request(`http://localhost:${port}`).get('/user');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      name: 'nahida_sultana',
      email: 'bsse1318@iit.du.ac.bd',
    });
  });
});



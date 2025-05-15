const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('kthe tekstin korrekt', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('CI/CD pipeline me Node.js!');
  });
});
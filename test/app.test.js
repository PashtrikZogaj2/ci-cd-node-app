const request = require('supertest');
const app = require('../app'); // sigurohu që ky rrugë është e saktë

describe('GET /', () => {
  it('kthe tekstin korrekt', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Pashtrik and Lorik');
  });
});

describe('GET /todos', () => {
  it('kthe HTML me listën e detyrave', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<h1>To-Do List</h1>');
    expect(res.text).toContain('<li>Bëj ushtrime</li>');
  });
});

describe('GET /users', () => {
  it('kthe HTML me listën e përdoruesve', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<h1>User List</h1>');
    expect(res.text).toContain('<li>Pashtrik</li>');
  });
});

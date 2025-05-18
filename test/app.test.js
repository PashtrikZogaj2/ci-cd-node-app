const request = require('supertest');
const app = require('../app');

describe('GET Routes', () => {
  it('kthe tekstin korrekt', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Pashtrik and Lorik');
  });

  it('kthe HTML me listën e detyrave', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<h1>To-Do List</h1>');
    expect(res.text).toContain('<li>Bëj ushtrime</li>');
  });

  it('kthe HTML me listën e përdoruesve', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<h1>User List</h1>');
    expect(res.text).toContain('<li>Pashtrik</li>');
  });
});

describe('POST, PUT, DELETE /todos', () => {
  let todoId;

  it('shton një todo të re', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Testo endpoint' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('title', 'Testo endpoint');
    todoId = res.body.id;
  });

  it('përditëson një todo', async () => {
    const res = await request(app)
      .put(`/todos/${todoId}`)
      .send({ title: 'Test i përditësuar' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', 'Test i përditësuar');
  });

  it('fshin një todo', async () => {
    const res = await request(app)
      .delete(`/todos/${todoId}`);

    expect(res.statusCode).toBe(204);
  });

 
});

const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: 'Ushtrime' },
  { id: 2, title: 'Test CI/CD' }
];

app.get('/', (req, res) => {
  res.send('Hello from Pashtrik and Lorik');
});

app.get('/todos', (req, res) => {
  const items = todos.map(todo => `<li>${todo.title}</li>`).join('');
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>To-Do List</title>
      </head>
      <body>
        <h1>To-Do List</h1>
        <ul>${items}</ul>
      </body>
    </html>
  `;
  res.send(html);
});

module.exports = app;

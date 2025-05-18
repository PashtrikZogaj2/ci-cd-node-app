const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: 'Bëj ushtrime' },
  { id: 2, title: 'Lexo për test' },
  { id: 3, title: 'Testo CI/CD' }
];

let users = ['Pashtrik', 'Lorik', 'TestUser'];

app.get('/', (req, res) => {
  res.send('Hello from Pashtrik and Lorik');
});

app.get('/todos', (req, res) => {
  const todoItems = todos.map(todo => `<li>${todo.title}</li>`).join('');
  res.send(`
    <h1>To-Do List</h1>
    <ul>${todoItems}</ul>
  `);
});

app.get('/users', (req, res) => {
  const userItems = users.map(user => `<li>${user}</li>`).join('');
  res.send(`
    <h1>User List</h1>
    <ul>${userItems}</ul>
  `);
});

// POST todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    title: req.body.title
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).send();
  todo.title = req.body.title;
  res.json(todo);
});

// DELETE todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).send();
  todos.splice(index, 1);
  res.status(204).send();
});

module.exports = app;

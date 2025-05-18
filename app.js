const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Pashtrik and Lorik');
});

app.get('/todos', (req, res) => {
  res.send(`
    <h1>To-Do List</h1>
    <ul>
      <li>Bëj ushtrime</li>
    </ul>
  `);
});

app.get('/users', (req, res) => {
  res.send(`
    <h1>User List</h1>
    <ul>
      <li>Pashtrik</li>
    </ul>
  `);
});

module.exports = app;










app.get('/todos', (req, res) => {
  res.send(`
    <h1>To-Do List</h1>
    <ul>
      <li>Bëj ushtrime</li>
      <li>Lexo për test</li>
      <li>Testo CI/CD</li>
    </ul>
  `);
});

app.get('/users', (req, res) => {
  res.send(`
    <h1>User List</h1>
    <ul>
      <li>Pashtrik</li>
      <li>Lorik</li>
      <li>TestUser</li>
    </ul>
  `);
});


    

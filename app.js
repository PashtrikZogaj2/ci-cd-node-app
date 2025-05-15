const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD pipeline me Node.js!');
});

module.exports = app;


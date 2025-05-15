const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`Serveri po dëgjon në http://localhost:${port}`);
});
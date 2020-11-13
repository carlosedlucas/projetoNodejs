const PORT = 3000;
const express = require('express');
const app = express();
const db = require('./src/config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// const path = require('path');

let d = db;
d.on('connected', function () {
  console.log('connected!');
});

d.on('disconnected', function () {
  console.log('disconnected!');
});

d.on('error', function (error) {
  console.log('Connection error: ' + error);
});

require('./src/config/routes')(app);

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});

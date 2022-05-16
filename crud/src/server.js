/* imports */
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const routes = require('./routes/index.route');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/api', routes);

mongoose
  .connect('mongodb://mongo:27017/crud-base', { useNewUrlParser: true })
  .then(() => {
    app.listen(4000);
    console.log('Conectou ao Banco!');
  })
  .catch((err) => console.log(err));

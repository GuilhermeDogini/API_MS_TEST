require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/index.route');

const app = express();

// Config JSON Response
app.use(express.json());
app.use('/api', routes);

mongoose
  .connect('mongodb://mongo:27017/auth-base', { useNewUrlParser: true })
  .then(() => {
    app.listen(3000);
    console.log('Conectou ao Banco!');
  })
  .catch((err) => console.log(err));

const express = require ('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();

//Permitindo que envie dados json
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
);
requireDir('./src/models');


app.use('/api', require('./src/routes'));

app.listen(3001);
require('dotenv').config();
require('./models');

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.static(`${__dirname}`/uploads));

mongoose.connect(process.env.MONGO_URI);

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('Servidor Iniciado');
})
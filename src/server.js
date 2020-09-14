const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv/config');
require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, ()=> console.log("Servidor ON"));
const express = require('express');
const morgan = require('morgan');
const app = express();
const index = require('./routes/index');
const auth = require('./routes/auth');
require('dotenv').config();

const baseUrl = `/${process.env.APP_PATH_SERVICE}/api/${process.env.VERSION_APP}`;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//app.use(baseUrl,index);
app.use(baseUrl, auth);

module.exports = app;


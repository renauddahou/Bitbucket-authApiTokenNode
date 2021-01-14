const express = require('express');
const morgan = require('morgan');
const app = express();
const index = require('./routes/index');
const auth = require('./routes/auth');
require('dotenv').config();
const http = require("../core/http");
const baseUrl = `/${process.env.APP_PATH_SERVICE}/api/${process.env.VERSION_APP}`;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(baseUrl,index);
app.use(baseUrl, auth);


/**
 * Controla Error de parseo JSON
 */
app.use(function (err, req, res, next) {
    console.error("Error ", err.message);
    const errorDetails = {
      statusCode: 500,
      message: err.message,
      description: "Error desconocido. Favor intente más tarde...",
    };
    http.error(res, errorDetails);
  });

module.exports = app;


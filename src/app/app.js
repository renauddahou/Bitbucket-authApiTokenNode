const express = require('express');
const morganBody = require('morgan-body');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/Swagger').options
const swaggerUIConfig = require('./config/Swagger').UIConfig
const http = require('./../core/http')

const index = require('./routes/index');
const auth = require('./routes/auth');

const baseUrl = `/api/${process.env.VERSION_APP}/${process.env.APP_PATH_SERVICE}`;

const swaggerDocs = swaggerJsDoc(swaggerOptions);

morganBody(app)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(baseUrl, routes);



//app.use(baseUrl,index);
app.use(baseUrl, auth);

app.use(`${baseUrl}/docs/favicon.ico`, express.static('./src/app/public/assets/favicon.ico'))
app.use(`${baseUrl}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerUIConfig));
app.get(`${baseUrl}/docs.json`, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
});

console.log(`${baseUrl}/docs`);

/**
 * Controla Error de parseo JSON
 */
app.use( (err, req, res, next) =>{
  console.error("Error ", err.name);
  const errorDetails = {
    statusCode: 500,
    message: err.name,
    description: "Error desconocido. Favor intente más tarde...",
  };
  http.error(res, errorDetails);
});


module.exports = app;

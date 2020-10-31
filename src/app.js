// Create aliases of directories
require('module-alias/register');
const CONFIG = require('@config/config');

// Import
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

//  Main
const app = express();

//  Middleware
const errorHandler = require('@middleware/errorHandler');
const logger = require('@middleware/logger');

// Routes
const mainRouter = require('@routes/main');
const externalAPIrouter = require('@routes/externalAPI')


app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

//  CORS
app.use(cors());

// Logger
app.use(logger);

// Routes
app.use('/', mainRouter);
app.use('/', externalAPIrouter);

// Handle errors only in development enviroment
if (process.env.CURRENT_ENV === 'development') {
   app.use(errorHandler);
} else {
   app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
   });
}

//  App running
module.exports = app;
const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

require('dotenv').config({path:'../../.env'});

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const objection = require('./objection');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.set('view engine', 'ejs');
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use(express.static(app.get('public')));

//THREEjs Folders
app.use('/build', express.static(path.join(__dirname, '../node_modules/three/build')));
app.use('/jsm', express.static(path.join(__dirname, '../node_modules/three/examples/jsm')));

app.use('/img', express.static(path.join(__dirname, './services/uploads/uploads')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(objection);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

const mainApp = express().use('/api', app);
const port = app.get('port');
const server = mainApp.listen(port);

module.exports = {app, server};

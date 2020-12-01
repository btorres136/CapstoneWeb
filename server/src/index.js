/* eslint-disable no-console */
const logger = require('./logger');
const {app, server }= require('./app');
//const port = app.get('port');
//const server = app.listen(port);

app.setup(server);
process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

app.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);


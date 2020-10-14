const users = require('./users/users.service.js');
const analysis = require('./analysis/analysis.service.js');
const cType = require('./c-type/c-type.service.js');
const sType = require('./s-type/s-type.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(analysis);
  app.configure(cType);
  app.configure(sType);
};

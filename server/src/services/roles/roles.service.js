// Initializes the `roles` service on path `/roles`
const { Roles } = require('./roles.class');
const rolesModel = require('../../models/roles.model');
const hooks = require('./roles.hooks');

module.exports = function (app) {
  const options = {
    Model: rolesModel,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/roles', new Roles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('roles');


  service.hooks(hooks);
};

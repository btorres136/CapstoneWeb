// Initializes the `users` service on path `/users`
const { Users } = require('./users.class');
const userModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const { afterFind } = require('../../models/users.model');

module.exports = function (app) {
  const options = {
    Model: userModel,
    paginate: app.get('paginate'),
    whitelist: ['$eager'],
    allowedEager: '[user_is_patient,user_is_doctor,userHasRole, analysis]'
  };

  // Initialize our service with any options it requires
  app.use('/users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks(app));
};

// Initializes the `doctor` service on path `/doctor`
const { Doctor } = require('./doctor.class');
const doctorModel = require('../../models/doctor.model');
const hooks = require('./doctor.hooks');

module.exports = function (app) {
  const options = {
    Model: doctorModel,
    paginate: app.get('paginate'),
    whitelist: ['$eager'],
    allowedEager: '[patients,user_is_doctor,analysis]'
  };

  // Initialize our service with any options it requires
  app.use('/doctor', new Doctor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('doctor');

  service.hooks(hooks);
};

// Initializes the `sType` service on path `/sType`
const { SType } = require('./s-type.class');
const sTypeModel = require('../../models/s-type.model');
const hooks = require('./s-type.hooks');

module.exports = function (app) {
  const options = {
    Model: sTypeModel,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sType', new SType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sType');

  service.hooks(hooks);
};

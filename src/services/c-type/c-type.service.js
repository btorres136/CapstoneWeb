// Initializes the `cType` service on path `/cType`
const { CType } = require('./c-type.class');
const cTypeModel = require('../../models/c-type.model');
const hooks = require('./c-type.hooks');

module.exports = function (app) {
  const options = {
    Model: cTypeModel,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cType', new CType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cType');

  service.hooks(hooks);
};

// Initializes the `spine` service on path `/spine`
const { Spine } = require('./spine.class');
const spineModel = require('../../models/spine.model');
const hooks = require('./spine.hooks');

module.exports = function (app) {
  const options = {
    Model: spineModel,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/spine', new Spine(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('spine');

  service.hooks(hooks);
};

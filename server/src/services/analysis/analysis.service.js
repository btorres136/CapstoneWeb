// Initializes the `analysis` service on path `/analysis`
const { Analysis } = require('./analysis.class');
const analysisModel = require('../../models/analysis.model');
const hooks = require('./analysis.hooks');

module.exports = function (app) {
  const options = {
    Model: analysisModel,
    paginate: app.get('paginate'),
    whitelist: ['$eager'],
    allowedEager: '[cType, sType, patient, doctor, spine]'
  };

  // Initialize our service with any options it requires
  app.use('/analysis', new Analysis(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('analysis');

  service.hooks(hooks(app));
};

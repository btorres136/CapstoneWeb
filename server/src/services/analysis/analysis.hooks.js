const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');
const checkPermissions = require('feathers-permissions');
const { iff, discardQuery, isProvider } = require('feathers-hooks-common');
const {isAdmin, filterAnalysis, uploadImage, getDoctorName} = require('../../hooks/myHooks.js');


module.exports = (app) => {
  return {
    before: {
      all: [
        authenticate('jwt'),
        checkPermissions({roles:['admin','analysis']}),
        iff(context => !isAdmin(context) && isProvider('external'), [discardQuery('$select','$eager'), context => filterAnalysis(context, app)] ),
      ],
      find: [],
      get: [],
      create: [iff(isProvider('external'), context => uploadImage(context,app))],
      update: [],
      patch: [],
      remove: [],
    },
  
    after: {
      all: [],
      find: [async context => getDoctorName(context,app)],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: [],
    },
  
    error: {
      all: [],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: [],
    },
  }
};

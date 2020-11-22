const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');
const checkPermissions = require('feathers-permissions');
const { iff } = require('feathers-hooks-common');
const {isAdmin, filterPatients} = require('../../hooks/myHooks.js');

module.exports = (app) => {
  return {
    before: {
      all: [ 
        authenticate('jwt'),
        checkPermissions({roles: ['admin','patient']}),
        iff(context => !isAdmin(context), context => filterPatients(context))
      ],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
    },
  
    after: {
      all: [],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
    },
  
    error: {
      all: [],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
    }
  }
};

const { setField } = require('feathers-authentication-hooks');
const checkpermissions = require('feathers-permissions');
const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = (app) => {
  return {
    before: {
      all: [
        authenticate('jwt'),
        checkpermissions({roles: ['admin', 'c-type']}),
      ],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: [],
    },
  
    after: {
      all: [],
      find: [],
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

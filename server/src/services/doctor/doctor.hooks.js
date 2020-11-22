const { authenticate } = require('@feathersjs/authentication').hooks;
const checkpermissions = require('feathers-permissions');
module.exports = {
  before: {
    all: [ 
      authenticate('jwt'), 
      checkpermissions({roles:['admin','doctor']}),
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
};

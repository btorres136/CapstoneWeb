const { setField } = require('feathers-authentication-hooks');
const { authenticate } = require('@feathersjs/authentication').hooks;
const checkpermissions = require('feathers-permissions');
const { isAdmin } = require('../../hooks/myHooks');
const {
  hashPassword,
  protect,
} = require('@feathersjs/authentication-local').hooks;
const { iff } = require('feathers-hooks-common');
module.exports = (app) => {
  return{
    before: {
      all: [],
      find: [
        authenticate('jwt'),
        checkpermissions({roles: ['admin','user']}),
        iff(context => !isAdmin(context), setField({ from: 'params.user.id', as: 'params.query.id' })),
      ],
      get: [
        authenticate('jwt'),
        iff(context => !isAdmin(context), setField({ from: 'params.user.id', as: 'params.query.id' })),
      ],
      create: [hashPassword('password')],
      update: [
        hashPassword('password'),
        authenticate('jwt'),
        checkpermissions({roles: ['admin','user']}),
        iff(context => !isAdmin(context), setField({ from: 'params.user.id', as: 'params.query.id' })),
      ],
      patch: [
        hashPassword('password'),
        authenticate('jwt'),
        checkpermissions({roles: ['admin','user']}),
        iff(context => !isAdmin(context), setField({ from: 'params.user.id', as: 'params.query.id' })),
      ],
      remove: [
        authenticate('jwt'),
        checkpermissions({roles: ['admin','user']}),
        iff(context => !isAdmin(context), setField({ from: 'params.user.id', as: 'params.query.id' })),
      ],
    },

    after: {
      all: [
        // Make sure the password field is never sent to the client
        // Always must be the last hook
        protect('password'),
      ],
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

const { setField } = require('feathers-authentication-hooks');

const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      setField({ from: 'params.user.id', as: 'params.query.id' }),
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
};

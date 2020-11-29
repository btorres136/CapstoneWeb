const checkPermissions = require('feathers-permissions');
const dauria = require('dauria');
const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = (app) => {
  return {
    before: {
      all: [ authenticate('jwt') ],
      find: [],
      get: [],
      create: [
        function(context) {
          if (!context.data.uri && context.params.file){
            console.log(context.params.file);
            const file = context.params.file;
            const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
            context.data = {uri: uri};
          }
        },
      ],
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

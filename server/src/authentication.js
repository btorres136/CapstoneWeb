const { JWTStrategy } = require('@feathersjs/authentication');
const MyAuthService = require('./services/authentication/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');
const {
  protect,
} = require('@feathersjs/authentication-local').hooks;
const {getUserRoleInfo} = require('./hooks/myHooks');

module.exports = app => {

  const authentication = new MyAuthService(app);
  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  const service = app.service('authentication');
  service.hooks({
    before:{
      all: [getUserRoleInfo]
    },
    after:{
      all: [protect('user.password','user.id','user.created_at', 'user.updated_at','user.deleted_at','user.permissions', 'user.user_is_patient.user_id')]  
    }
  });
  app.configure(expressOauth());
};

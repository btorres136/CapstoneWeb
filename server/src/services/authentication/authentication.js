const { AuthenticationService } = require('@feathersjs/authentication');
const {NotAuthenticated} = require('@feathersjs/errors');

class MyAuthService extends AuthenticationService{
    async authenticate(data, params, ...strategies){
        const auth = await super.authenticate(data, params, ...strategies);
        const roles = await this.app.service('roles').find({
            query:{
              id: auth.user.role_id,
            }
        });
        delete auth.user.role_id;
        delete auth.user.password;
        auth.user.role = roles.data[0].role,
        auth.user.permissions = roles.data[0].permissions;
        if(auth.user.role == 'Doctor'){
            const isVerified = await this.app.service('doctor').find({
                query:{
                    user_id: auth.user.id
                }
            });
            if(isVerified.data[0].validatedBy == null){
                throw new NotAuthenticated('Your account has not been verified by our team');
            }
        }
        return auth;
    }
}

module.exports = MyAuthService;
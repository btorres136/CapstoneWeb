// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class Users extends Model {
  static get tableName() {
    return tableNames.userTable;
  }

  

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['password', 'email', 'name', 'lastName'],

      properties: {
        name: { type: 'string', minLenght: 2, maxLenght: 35 },
        lastName: { type: 'string', minLenght: 2, maxLenght: 50 },
        email: { type: 'string', minLenght: 5, maxLenght: 320 },
        password: { type: 'string', minLenght: 6, maxLenght: 2000 },
      },
    };
  }

  static get relationMappings() {
    const doctor = require('./doctor.model');
    const patient = require('./patient.model');
    const roles = require('./roles.model');

    return {
      user_is_patient: {
        relation: Model.HasOneRelation,
        modelClass: patient,
        join: {
          from: 'user.id',
          to: 'patient.user_id'
        }
      },
      user_is_doctor: {
        relation: Model.HasOneRelation,
        modelClass: doctor,
        join: {
          from: 'user.id',
          to: 'doctor.user_id'
        }
      },
      userHasRole: {
        relation: Model.BelongsToOneRelation,
        modelClass: roles,
        join: {
          from: 'role_id',
          to: 'roles.id'
        }
      },
    }
  }

  $beforeInsert() {
    this.created_at = this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Users;

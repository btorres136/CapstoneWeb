// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Roles extends Model {

  static get tableName() {
    return 'roles';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['role','description'],

      properties: {
        role: { 
          type: 'string',
          maxLenght: 50,
          minLenght: 3, 
        },
        description: {
          type: 'string',
          maxLenght: 500,
          minLenght: 5,
        }
      }
    };
  }

  static get relationMappings() {
    const user = require('./users.model');
    return {
      userRoles: {
        relation: Model.HasOneRelation,
        modelClass: user,
        join: {
          from: 'role.id',
          to: 'user.role_id'
        }
      }
    }
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = Roles;

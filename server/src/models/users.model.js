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
      required: ['password', 'email', 'age', 'name', 'lastName'],

      properties: {
        age: { type: 'integer', minLenght: 1, maxLenght: 2, minimum: 0 },
        name: { type: 'string', minLenght: 2, maxLenght: 35 },
        lastName: { type: 'string', minLenght: 2, maxLenght: 50 },
        email: { type: 'string', minLenght: 5, maxLenght: 320 },
        password: { type: 'string', minLenght: 6, maxLenght: 2000 },
      },
    };
  }

  $beforeInsert() {
    this.created_at = this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Users;

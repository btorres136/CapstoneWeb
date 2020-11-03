// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class CType extends Model {
  static get tableName() {
    return tableNames.cTypeTable;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['risk', 'angle'],

      properties: {
        risk: { type: 'number' },
        angel: { type: 'number' },
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

module.exports = CType;

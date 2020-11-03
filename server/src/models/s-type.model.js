// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class SType extends Model {
  static get tableName() {
    return tableNames.sTypeTable;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['risk', 'lowAngle', 'highAngle'],

      properties: {
        risk: { type: 'number' },
        lowAngle: { type: 'number' },
        highAngle: { type: 'number' },
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

module.exports = SType;

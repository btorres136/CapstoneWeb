// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class Analysis extends Model {
  static get tableName() {
    return tableNames.analysisTable;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'cType_id', 'sType_id'],

      properties: {
        user_id: {
          type: 'integer',
          minimum: 0
        },
        cType_id: {
          type: 'integer',
          minimum: 0
        },
        sType_id: {
          type: 'integer',
          minimum: 0
        },
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

module.exports = Analysis;

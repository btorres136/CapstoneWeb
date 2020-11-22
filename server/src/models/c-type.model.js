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

  static get relationMappings() {
    const analysis = require('./analysis.model');
    return {
      analysis: {
        relation: Model.HasOneRelation,
        modelClass: analysis,
        join: {
          from: 'cType.id',
          to: 'analysis.cType_id'
        }
      }
    }
  }

  $beforeInsert() {
    this.created_at = this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = CType;

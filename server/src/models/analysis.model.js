// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');
const tableNames = require('../constants/tableNames');
const { modelPaths } = require('./roles.model');

class Analysis extends Model {
  static get tableName() {
    return tableNames.analysisTable;
  }

  static get relationMappings() {
    const cType = require('./c-type.model');
    const sType = require('./s-type.model');
    const patient = require('./patient.model');
    const doctor = require('./doctor.model');
    const spine = require('./spine.model');
    return {
      cType: {
        relation: Model.BelongsToOneRelation,
        modelClass: cType,
        join: {
          from: 'analysis.cType_id',
          to: 'cType.id'
        }
      },
      sType: {
        relation: Model.BelongsToOneRelation,
        modelClass: sType,
        join: {
          from: 'analysis.sType_id',
          to: 'sType.id'
        }
      },
      patient: {
        relation: Model.BelongsToOneRelation,
        modelClass: patient,
        join: {
          from: 'analysis.patient_id',
          to: 'patient.id'
        }
      },
      doctor: {
        relation: Model.BelongsToOneRelation,
        modelClass: doctor,
        join: {
          from: 'analysis.reviewedBy',
          to: 'doctor.id'
        }
      },
      spine: {
        relation: Model.BelongsToOneRelation,
        modelClass: spine,
        join: {
          from: 'analysis.spine_id',
          to: 'spine.id'
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['image_submitted'],

      properties: {
        image_submitted: {
          type: 'string',
        }
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

// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Patient extends Model {

  static get tableName() {
    return 'patient';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['age', 'initial_weight', 'initial_height'],

      properties: {
        age: { 
          type: 'integer',
          minimum: 0,
          maximum: 40,
        },
        initial_height: {
          type: 'integer',
          minimum: 0,
          maximum: 120,
        },
        initial_weight: {
          type: 'integer',
          minimum: 0,
          maximum: 800,
        }
      }
    };
  }

  static get relationMappings() {
    const user = require('./users.model');
    const analysis = require('./analysis.model');
    const doctor = require('./doctor.model');
    return {
      user_is_patient: {
        relation: Model.HasOneRelation,
        modelClass: user,
        join: {
          from: 'patient.user_id',
          to: 'user.id'
        }
      },
      analysis: {
        relation: Model.HasManyRelation,
        modelClass: analysis,
        join: {
          from: 'patient.id',
          to: 'analysis.patient_id'
        }
      },
      doctor: {
        relation: Model.ManyToManyRelation,
        modelClass: doctor,
        join: {
          from: 'patient.id',
          through: {
            from: 'analysis.patient_id',
            to: 'analysis.reviewedBy'
          },
          to: 'doctor.id' 
        }
      }
    }
  }

  $beforeInsert() {
    this.created_at = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Patient;

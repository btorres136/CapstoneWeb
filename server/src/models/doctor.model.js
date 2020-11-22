// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Doctor extends Model {

  static get tableName() {
    return 'doctor';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'license'],

      properties: {
        user_id: {
          type: 'integer',
          minimum: 0
        },
        license: {
          type: 'string',
          minLenght: 5,
          maxLenght: 1998,
        },
        validatedBy: {
          type: 'integer',
          minimum: 0
        },
      }
    };
  }

  static get relationMappings() {
    const user = require('./users.model');
    const analysis = require('./analysis.model');
    const patients = require('./patient.model');
    return {
      user_is_doctor: {
        relation: Model.BelongsToOneRelation,
        modelClass: user,
        join: {
          from: 'doctor.user_id',
          to: 'user.id'
        }
      },
      analysis: {
        relation: Model.HasManyRelation,
        modelClass: analysis,
        join: {
          from: 'doctor.id',
          to: 'analysis.reviewedBy'
        }
      },
      patients: {
        relation: Model.ManyToManyRelation,
        modelClass: patients,
        join: {
          from: 'doctor.id',
          through: {
            from: 'analysis.reviewedBy',
            to: 'analysis.patient_id'
          },
          to: 'patient.id'
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

module.exports = Doctor;
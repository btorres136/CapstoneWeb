// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Spine extends Model {

  static get tableName() {
    return 'spine';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['bone0','bone1','bone2','bone3','bone4','bone5','bone6','bone7','bone8',],

      properties: {
        bone0: { type: 'float' },
        bone1: { type: 'float' },
        bone2: { type: 'float' },
        bone3: { type: 'float' },
        bone4: { type: 'float' },
        bone5: { type: 'float' },
        bone6: { type: 'float' },
        bone7: { type: 'float' },
        bone8: { type: 'float' },
      }
    };
  }

  $beforeInsert() {
    this.created_at = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Spine;

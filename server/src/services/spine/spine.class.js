const { Service } = require('feathers-objection');

exports.Spine = class Spine extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
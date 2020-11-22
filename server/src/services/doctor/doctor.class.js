const { Service } = require('feathers-objection');

exports.Doctor = class Doctor extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};

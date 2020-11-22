const { Service } = require('feathers-objection');

exports.Patient = class Patient extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};

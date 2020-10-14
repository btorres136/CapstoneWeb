const assert = require('assert');
const app = require('../../src/app');

describe('\'patient-info\' service', () => {
  it('registered the service', () => {
    const service = app.service('patient-info');

    assert.ok(service, 'Registered the service');
  });
});

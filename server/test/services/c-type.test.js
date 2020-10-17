const assert = require('assert');
const app = require('../../src/app');

describe('\'cType\' service', () => {
  it('registered the service', () => {
    const service = app.service('cType');

    assert.ok(service, 'Registered the service');
  });
});

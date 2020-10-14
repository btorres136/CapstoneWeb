const assert = require('assert');
const app = require('../../src/app');

describe('\'sType\' service', () => {
  it('registered the service', () => {
    const service = app.service('sType');

    assert.ok(service, 'Registered the service');
  });
});

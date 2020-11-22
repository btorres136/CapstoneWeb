const assert = require('assert');
const app = require('../../src/app');

describe('\'userHasRole\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-has-role');

    assert.ok(service, 'Registered the service');
  });
});

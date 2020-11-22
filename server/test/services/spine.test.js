const assert = require('assert');
const app = require('../../src/app');

describe('\'spine\' service', () => {
  it('registered the service', () => {
    const service = app.service('spine');

    assert.ok(service, 'Registered the service');
  });
});

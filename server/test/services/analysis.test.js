const assert = require('assert');
const app = require('../../src/app');

describe('\'analysis\' service', () => {
  it('registered the service', () => {
    const service = app.service('analysis');

    assert.ok(service, 'Registered the service');
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let expectedHeaders = {
      Accept: 'application/hal+json;charset=UTF-8',
      Authorization: 'Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=',
      'Content-Type': 'application/hal+json',
    };

    assert.equal(adapter.host, 'https://api-gateway-dev.phorest.com', 'has proper host set');
    assert.equal(adapter.namespace, 'third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw', 'has proper namespace set');
    assert.deepEqual(adapter.headers, expectedHeaders, 'has proper headers set');
  });

  test('@method pathForType', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let modelNameMock = 'awesome client';
    let expectedResult = 'awesome-client';

    assert.equal(adapter.pathForType(modelNameMock), expectedResult, 'return proper value');
  });
});

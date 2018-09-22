import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import ENV from 'phorest-app/config/environment';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let expectedHeaders = {
      Accept: 'application/hal+json;charset=UTF-8',
      Authorization: 'Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=',
      'Content-Type': 'application/hal+json',
    };

    assert.equal(adapter.host, ENV.api.host, 'has proper host set');
    assert.equal(adapter.namespace, `${ENV.api.namespace}/business/${ENV.auth.businessId}`, 'has proper namespace set');
    assert.deepEqual(adapter.headers, expectedHeaders, 'has proper headers set');
  });

  test('@method pathForType', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let modelNameMock = 'awesome client';
    let expectedResult = 'awesome-client';

    assert.equal(adapter.pathForType(modelNameMock), expectedResult, 'return proper value');
  });

  test('@method query', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    let storeMock = {};
    let typeMock = 'type';
    let queryMock = {
      email: 'test@example.com',
      phone: '',
      items: [],
    };
    let expectedMutatedQuery = { // no phone field as it is empty and not an array
      email: 'test@example.com',
      items: [],
    };
    adapter.ajax = sinon.spy();

    adapter.query(storeMock, typeMock, queryMock);

    assert.deepEqual(queryMock, expectedMutatedQuery, 'empty values (except empty array) are removed from query params');
  });
});

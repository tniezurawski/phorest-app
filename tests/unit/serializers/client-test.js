import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | client', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('client');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('client', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

  test('it has primaryKey set', function(assert) {
    let serializer = this.owner.lookup('serializer:client');

    assert.equal(serializer.primaryKey, 'clientId', 'has primaryKey set to clientId');
  });
});

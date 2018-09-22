import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | voucher', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('voucher');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let now = new Date();
    let record = store.createRecord('voucher', {
      clientId: 'oNnwgQ7075bW6ozIxOxdGQ',
      expiryDate: now,
      issueDate: now,
      originalBalance: 100,
      remainingBalance: null,
      serialNumber: null,
    });

    // In this serializer's serialize method new field (creatingBranchId) is added,
    // dates are converted to ISO strings and nulls are removed
    let expectedSerializerRecord = {
      clientId: 'oNnwgQ7075bW6ozIxOxdGQ',
      creatingBranchId: 'SE-J0emUgQnya14mOGdQSw',
      expiryDate: now.toISOString(),
      issueDate: now.toISOString(),
      originalBalance: 100,
    };

    let serializedRecord = record.serialize();

    assert.deepEqual(serializedRecord, expectedSerializerRecord);
  });

  test('it has primaryKey set', function(assert) {
    let serializer = this.owner.lookup('serializer:voucher');

    assert.equal(serializer.primaryKey, 'voucherId', 'has primaryKey set to voucherId');
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let serializer = this.owner.lookup('serializer:application');

    assert.ok(serializer);
  });
});

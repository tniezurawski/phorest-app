import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | client', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('client', { firstName: 'John', lastName: 'Doe' });

    assert.ok(model);
    assert.equal(model.get('fullName'), 'John Doe', 'compute fullName properly')
  });
});

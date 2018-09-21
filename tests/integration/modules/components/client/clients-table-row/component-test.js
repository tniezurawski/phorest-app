import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | client/clients-table-row', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('client', {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      mobile: '12345678',
    });
    await render(hbs`{{client/clients-table-row client=client}}`);

    assert.equal(this.element.querySelector('[data-test-fullname]').textContent.trim(), 'John Doe');
    assert.equal(this.element.querySelector('[data-test-email]').textContent.trim(), 'johndoe@example.com');
    assert.equal(this.element.querySelector('[data-test-mobile]').textContent.trim(), '12345678');
    assert.equal(this.element.querySelector('[data-test-action] button').textContent.trim(), 'Generate');
  });
});

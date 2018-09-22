import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | client/clients-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('clients', [
      { fullName: 'John Doe', email: 'johndoe@example.com', mobile: '12345678'},
      { fullName: 'Jane Doe', email: 'janedoe@example.com', mobile: '87654321'},
      { fullName: 'Tomasz Nieżurawski', email: 'tn@example.com', mobile: '54637281'},
    ]);
    this.set('generateVoucher', () => assert.ok(true));
    await render(hbs`{{client/clients-table clients=clients generateVoucher=(action generateVoucher)}}`);

    assert.equal(this.element.querySelector('thead [data-test-name]').textContent.trim(), 'Name', 'show name column');
    assert.equal(this.element.querySelector('thead [data-test-email]').textContent.trim(), 'Email', 'show email column');
    assert.equal(this.element.querySelector('thead [data-test-phone]').textContent.trim(), 'Phone', 'show phone column');
    assert.equal(this.element.querySelector('thead [data-test-voucher]').textContent.trim(), 'Voucher', 'show voucher column');

    assert.equal(this.element.querySelectorAll('tbody tr').length, 3, 'show all clients');
  });
});

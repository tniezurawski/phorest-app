import { module, test } from 'qunit';
import { visit, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function(hooks) {
  setupApplicationTest(hooks);

  test('search for clients and generate a voucher', async function(assert) {
    await visit('/');
    await fillIn('[data-test-email] input', 'non_existing@example.com');
    await click('[data-test-submit]');

    assert.equal(this.element.querySelector('[data-test-no-clients]').textContent.trim(), 'No clients match your criteria', 'show no results match criteria');

    await fillIn('[data-test-email] input', 'test@example.com');
    await click('[data-test-submit]');

    assert.equal(this.element.querySelectorAll('table tbody tr').length, 3, 'show clients');

    await fillIn('table tbody tr:first-child [data-test-input] input', 100);
    await click('table tbody tr:first-child button');
    assert.equal(this.element.querySelectorAll('table tbody tr:first-child [data-test-voucher-number]').length, 1, 'show voucher number');
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
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

  module('@action handleGenerateVoucher', function () {
    test('show validation error', async function(assert) {
      this.set('client', {
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        mobile: '12345678',
      });
      this.set('generateVoucher', () => assert.ok(true));

      await render(hbs`{{client/clients-table-row client=client generateVoucher=(action generateVoucher)}}`);
      await click('button');

      assert.equal(this.element.querySelector('input').classList.contains('is-danger'), true, 'validation shown');
    });

    test('call generateVoucher', async function(assert) {
      const client = {
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        mobile: '12345678',
      };
      this.set('client', client);
      this.set('generateVoucher', (givenClient, givenOriginalBalance) => {
        assert.deepEqual(givenClient, client, 'client passed properly');
        assert.equal(givenOriginalBalance, '100', 'originalBalance passed properly');
      });

      await render(hbs`{{client/clients-table-row client=client generateVoucher=(action generateVoucher)}}`);
      await fillIn('input', 100);
      await click('button');
    });
  });
});

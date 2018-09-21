import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form/voucher-generator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('onSubmit', () => assert.ok(true));

    await render(hbs`{{form/voucher-generator onSubmit=(action onSubmit)}}`);

    assert.equal(this.element.querySelector('[data-test-form-title]').textContent.trim(), 'Find a client and generate voucher', 'has set proper form title');
    assert.equal(this.element.querySelector('[data-test-form-desc]').textContent.trim(), 'Type email or phone', 'has set proper form description');
    
    assert.equal(this.element.querySelectorAll('[data-test-email]').length, 1, 'has email field');
    assert.equal(this.element.querySelectorAll('[data-test-phone]').length, 1, 'has phone field');
  });
});

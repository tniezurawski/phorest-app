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
    
    assert.equal(this.element.querySelector('[data-test-email]').getAttribute('type'), 'email', 'has set proper type set for email field');
    assert.equal(this.element.querySelector('[data-test-email]').getAttribute('placeholder'), 'e.g. techtest@phorest.com', 'has set proper placeholder set for email field');
    
    assert.equal(this.element.querySelector('[data-test-phone]').getAttribute('type'), 'text', 'has set proper type set for phone field');
    assert.equal(this.element.querySelector('[data-test-phone]').getAttribute('placeholder'), 'e.g. 888888855599222', 'has set proper placeholder set for phone field');
  });
});

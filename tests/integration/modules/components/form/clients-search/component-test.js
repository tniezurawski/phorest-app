import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form/clients-search', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('onSubmit', () => assert.ok(true));

    await render(hbs`{{form/clients-search onSubmit=(action onSubmit) showFormError=showFormError}}`);

    assert.equal(this.element.querySelector('[data-test-form-title]').textContent.trim(), 'Find a client and generate a voucher', 'has set proper form title');
    assert.equal(this.element.querySelector('[data-test-form-desc]').textContent.trim(), 'Type email or phone', 'has set proper form description');
    assert.equal(this.element.querySelectorAll('[data-test-form-error]').length, 0, 'does not have a form error to show');

    assert.equal(this.element.querySelectorAll('[data-test-email]').length, 1, 'has email field');
    assert.equal(this.element.querySelectorAll('[data-test-phone]').length, 1, 'has phone field');

    this.set('showFormError', true);

    assert.equal(this.element.querySelector('[data-test-form-error]').textContent.trim(), 'Ups! An error occurred. Please contact with us if it will happen again.', 'has proper form error');
  });

  module('@action handleSubmit', function () {
    test('show validation error', async function(assert) {
      this.set('onSubmit', () => assert.ok(true));

      await render(hbs`{{form/clients-search onSubmit=(action onSubmit)}}`);
      await click('button');

      assert.equal(this.element.querySelectorAll('[data-test-error]').length, 2, 'two fields have errors');
    });

    test('show form error', async function(assert) {
      this.set('email', 'test@example.com');
      this.set('phone', '12345678');
      this.set('onSubmit', () => { return Promise.reject({ message: 'Error' }); });

      await render(hbs`
        {{form/clients-search
          email=email
          phone=phone
          onSubmit=(action onSubmit)
        }}
      `);
      await click('button');

      assert.equal(this.element.querySelectorAll('[data-test-form-error]').length, 1, 'show form error');
    });
  });

  /*
    NOTE on onValidationSuccess method and handleSubmit action:

    One could argue that I could test this method in unit tests and even do the same with handleSubmit action.
    My understanding of components and their nature suggest me to rather test it only with an integration test.
    I found that other people in the community think the same (e.g. thejsguy).
    Anyway, I'm open for discussion if needed ;)
   */
});

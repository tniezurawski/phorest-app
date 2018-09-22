import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bulma/bulma-field-btn-addons', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputPlaceholder', 'test placeholder');
    this.set('btnLabel', 'my button');
    this.set('size', 'small');
    this.set('onButtonClick', () => assert.ok(true));

    await render(hbs`
      {{bulma/bulma-field-btn-addons
        leftAddon=leftAddon
        hasRightAddon=hasRightAddon
        size=size
        globalError=globalError
        inputError=inputError
        inputPlaceholder=inputPlaceholder
        inputValue=inputValue
        isLoading=isLoading
        btnDisabled=btnDisabled
        btnLabel=btnLabel
        onButtonClick=(action onButtonClick)
      }}
    `);

    assert.equal(this.element.querySelectorAll('[data-test-leftaddon]').length, 0, 'no leftAddon by default');
    assert.equal(this.element.querySelectorAll('[data-test-rightaddon]').length, 0, 'no rightAddon by default');
    assert.equal(this.element.querySelector('[data-test-input] input').getAttribute('placeholder'), 'test placeholder', 'proper input placeholder set');

    this.set('leftAddon', '$');
    this.set('hasRightAddon', true);

    assert.equal(this.element.querySelector('[data-test-leftaddon]').textContent.trim(), '$', 'has proper left addon set');
    assert.equal(this.element.querySelector('[data-test-rightaddon] button').textContent.trim(), 'my button', 'has proper button label set');

    // Size
    assert.equal(this.element.querySelector('[data-test-leftaddon] a').classList.contains('is-small'), true, 'left addon has proper size');
    assert.equal(this.element.querySelector('[data-test-input] input').classList.contains('is-small'), true, 'input has proper size');
    assert.equal(this.element.querySelector('[data-test-rightaddon] button').classList.contains('is-small'), true, 'input has proper size');

    this.set('inputError', 'this value is required');
    assert.equal(this.element.querySelector('[data-test-input] input').classList.contains('is-danger'), false, 'input does not show error if globalError is not set');

    this.set('globalError', true);
    assert.equal(this.element.querySelector('[data-test-input] input').classList.contains('is-danger'), true, 'input has error class');
  });
});

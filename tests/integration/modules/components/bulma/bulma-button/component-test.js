import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bulma/bulma-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#bulma/bulma-button isLoading=isLoading disabled=disabled}}
        Lorem ipsum
      {{/bulma/bulma-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'Lorem ipsum', 'yield given block');
    assert.equal(this.element.querySelectorAll('[data-test-loading]').length, 0, 'does not show loading spinner by default');
    assert.equal(this.element.querySelector('button').getAttribute('disabled'), null, 'does not have disabled attribute by default');

    this.set('isLoading', true);

    assert.equal(this.element.querySelectorAll('[data-test-loading]').length, 1, 'show loading spinner');

    this.set('disabled', true);

    assert.equal(this.element.querySelector('button').getAttribute('disabled'), '', 'has disabled attribute');
  });
});

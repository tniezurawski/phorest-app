import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app/app-navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{app/app-navbar}}`);

    assert.equal(this.element.querySelector('[data-test-company-name]').textContent.trim(), 'Awesome Salon', 'has set proper company name');
    assert.equal(this.element.querySelector('[data-test-menu]').classList.contains('is-active'), false, 'does not have is-active class on menu');

    await click('[data-test-menu-toggle]');

    assert.equal(this.element.querySelector('[data-test-menu]').classList.contains('is-active'), true, 'has is-active class on menu');
  });
});

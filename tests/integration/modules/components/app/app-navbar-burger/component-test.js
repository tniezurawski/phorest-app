import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app/app-navbar-burger', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('isActive', false);
    this.set('toggle', () => assert.ok(true));

    await render(hbs`{{app/app-navbar-burger isActive=isActive toggle=(action toggle)}}`);

    assert.equal(this.element.querySelector('a').getAttribute('role'), 'button', 'has button role set');
    assert.equal(this.element.querySelector('a').getAttribute('aria-label'), 'menu', 'has aria-label attribute set to menu');
    assert.equal(this.element.querySelector('a').getAttribute('aria-expanded'), null, 'does not have aria-expanded attribute set');
    assert.equal(this.element.querySelector('a').classList.contains('is-active'), false, 'does not have is-active class');

    this.set('isActive', true);

    assert.equal(this.element.querySelector('a').getAttribute('aria-expanded'), '', 'has aria-expanded attribute set');
    assert.equal(this.element.querySelector('a').classList.contains('is-active'), true, 'has is-active class');
  });
});

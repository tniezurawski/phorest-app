import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bulma/bulma-hero', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#bulma/bulma-hero}}
        template block text
      {{/bulma/bulma-hero}}
    `);

    assert.equal(this.element.querySelectorAll('.hero').length, 1, 'has hero class set');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});

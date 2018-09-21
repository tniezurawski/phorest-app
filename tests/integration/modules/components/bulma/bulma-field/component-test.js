import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bulma/bulma-field', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('label', 'Lorem ipsum');
    this.set('value', 'dolor');

    await render(hbs`{{bulma/bulma-field value=value label=label type=type placeholder=placeholder}}`);

    assert.equal(this.element.querySelector('[data-test-label]').textContent.trim(), 'Lorem ipsum', 'label has proper value');
    assert.equal(this.element.querySelector('input').value, 'dolor', 'input has proper value');
    assert.equal(this.element.querySelector('input').getAttribute('type'), 'text', 'input type is text by default');
    assert.equal(this.element.querySelector('input').getAttribute('placeholder'), null, 'input does not have placeholder by default');

    this.set('type', 'email');
    this.set('placeholder', 'test@example.com');

    assert.equal(this.element.querySelector('input').getAttribute('type'), 'email', 'input type has proper value');
    assert.equal(this.element.querySelector('input').getAttribute('placeholder'), 'test@example.com', 'input placeholder has proper value');
  });
});

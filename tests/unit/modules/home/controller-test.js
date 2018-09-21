import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Controller | home', function(hooks) {
  setupTest(hooks);

  test('@action searchForClient', function(assert) {
    let controller = this.owner.lookup('controller:home');
    let spy = controller.store.query = sinon.spy();
    let emailMock = 'test@example.com';
    let phoneMock = '12345678';

    controller.send('searchForClient', emailMock, phoneMock);

    assert.ok(spy.calledWith('client', { email: emailMock, phone: phoneMock }));
  });
});

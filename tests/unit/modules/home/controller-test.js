import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Controller | home', function(hooks) {
  setupTest(hooks);

  test('@action searchForClient', function(assert) {
    let controller = this.owner.lookup('controller:home');
    let emailMock = 'test@example.com';
    let phoneMock = '12345678';
    let clientsMock = [{ fullName: 'John Doe', email: 'johndoe@example.com', mobile: '12345678' }];
    let spy = sinon.stub(controller.store, 'query').resolves(clientsMock);

    controller.send('searchForClient', emailMock, phoneMock);

    assert.ok(spy.calledWith('client', { email: emailMock, phone: phoneMock }));
  });
});

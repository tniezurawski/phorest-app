import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Controller | home', function(hooks) {
  setupTest(hooks);

  test('@action generateVoucher', async function(assert) {
    let controller = this.owner.lookup('controller:home');
    let clientIdMock = 1;
    let clientMock = { get() { return clientIdMock; } };
    let originalBalanceMock = 150;

    let spy = sinon.stub(controller.voucher, 'generate').resolves();

    await controller.send('generateVoucher', clientMock, originalBalanceMock);

    assert.ok(spy.calledWith(clientIdMock, originalBalanceMock), 'call generate method from voucher service with proper args');
  });

  test('@action searchForClient', async function(assert) {
    let controller = this.owner.lookup('controller:home');
    let emailMock = 'test@example.com';
    let phoneMock = '12345678';
    let clientsMock = [{ fullName: 'John Doe', email: 'johndoe@example.com', mobile: '12345678' }];
    let spy = sinon.stub(controller.store, 'query').resolves(clientsMock);

    await controller.send('searchForClient', emailMock, phoneMock);

    assert.ok(spy.calledWith('client', { email: emailMock, phone: phoneMock }), 'query for clients using store method');
  });
});

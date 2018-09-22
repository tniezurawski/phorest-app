import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Service | voucher', function(hooks) {
  setupTest(hooks);

  test('@ generate method', async function(assert) {
    let service = this.owner.lookup('service:voucher');

    // Mocks
    let clientIdMock = 1;
    let originalBalanceMock = 100;

    // Spies
    let newVoucherMock = {
      save: sinon.stub().resolves({}),
    };
    let createRecordSpy = sinon.stub(service.store, 'createRecord').returns(newVoucherMock);
    let newVoucherSaveSpy = newVoucherMock.save;

    // Expectation
    let expectedNewVoucherObj = {
      clientId: clientIdMock,
      expiryDate: sinon.match.date,
      issueDate: sinon.match.date,
      originalBalance: originalBalanceMock,
    };

    // Call method
    await service.generate(clientIdMock, originalBalanceMock);

    // Assert
    assert.ok(createRecordSpy.calledWithMatch('voucher', expectedNewVoucherObj));
    assert.ok(newVoucherSaveSpy.called);
  });
});

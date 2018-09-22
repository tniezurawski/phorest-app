import Service from '@ember/service';
import { service } from '@ember-decorators/service';

const VOUCHER_EXPIRATION_DURATION = 30; // in days

export default class VoucherService extends Service {
  @service store;

  async generate(clientId, originalBalance) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + VOUCHER_EXPIRATION_DURATION);

    const newVoucher = this.get('store').createRecord('voucher', {
      clientId,
      expiryDate,
      issueDate: new Date(),
      originalBalance,
    });

    return await newVoucher.save();
  }
}

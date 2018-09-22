import DS from 'ember-data';
import { attr } from '@ember-decorators/data';

const { Model } = DS;

export default class VoucherModel extends Model {
  @attr('string') clientId;
  @attr('date') expiryDate;
  @attr('date') issueDate;
  @attr('number') originalBalance;
  @attr('string') serialNumber;
  @attr('number') remainingBalance;
}

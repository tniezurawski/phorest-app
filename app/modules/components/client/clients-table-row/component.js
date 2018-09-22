import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { tagName } from '@ember-decorators/component';
import { notEmpty } from '@ember-decorators/object/computed';
import { validator, buildValidations, hasValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  originalBalance: validator('presence', true),
});

@tagName('tr')
@hasValidations(Validations)
export default class ClientsTableRow extends Component {
  globalError = false;
  isGenerating = false;

  @notEmpty('voucher') hasVoucher;

  async onValidationSuccess(client, originalBalance) {
    const voucher = await this.generateVoucher(client, originalBalance);

    this.setProperties({ isGenerating: false, voucher });
  }

  @action
  async handleGenerateVoucher(client, originalBalance) {
    if (!this.get('isGenerating')) {
      const { validations } = await this.validate();

      if (validations.get('isInvalid')) {
        this.set('globalError', true);
      } else {
        this.set('isGenerating', true);
        await this.onValidationSuccess(client, originalBalance);
      }
    }
  }
}

import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { action } from '@ember-decorators/object';
import { validator, buildValidations, hasValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', {
      presence: true,
      disabled: notEmpty('model.phone'),
      message: 'Type email of phone number',
    }),
    validator('format', {
      type: 'email',
      disabled: notEmpty('model.phone'),
    }),
  ],

  phone: validator('presence', {
    presence: true,
    disabled: notEmpty('model.email'),
    message: 'Type email of phone number',
  }),
});

@hasValidations(Validations)
export default class FormVoucherGenerator extends Component {
  globalError = false;
  isSearching = false;
  showFormError = false;

  async onValidationSuccess(email, phone) {
    try {
      await this.onSubmit(email, phone);
      this.setProperties({ isSearching: false, showFormError: false });
    } catch(e) {
      this.setProperties({ isSearching: false, showFormError: true });
    }
  }

  @action
  async handleSubmit() {
    const { email, phone } = this;

    if (!this.get('isSearching')) {
      const { validations } = await this.validate();

      if (validations.get('isInvalid')) {
        this.set('globalError', true);
      } else {
        this.set('isSearching', true);
        await this.onValidationSuccess(email, phone);
      }
    }
  }
}

/*
  NOTE on the component:

  This component might be used in future to isolate form base component that would handle validations etc.
  I didn't want to go too far with abstracting things in this exercise as this could be a bit premature.
 */

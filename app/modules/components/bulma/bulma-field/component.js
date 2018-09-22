import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { and, notEmpty } from '@ember-decorators/object/computed';

@classNames('field')
export default class BulmaField extends Component {
  type = 'text';

  @notEmpty('error') hasError;
  @and('hasError', 'globalError') showError;

  @computed('showError')
  get inputClasses() {
    let classes = ['input'];

    if (this.get('showError')) {
      classes.push('is-danger');
    }

    return classes.join(' ');
  }
}

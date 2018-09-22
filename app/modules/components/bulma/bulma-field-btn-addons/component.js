import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { and, notEmpty } from '@ember-decorators/object/computed';
import { isPresent } from '@ember/utils';

@classNames('field has-addons')
export default class BulmaFieldBtnAddons extends Component {
  @notEmpty('inputError') hasError;
  @and('hasError', 'globalError') showError;

  @computed('sizeClass')
  get btnClasses() {
    return isPresent(this.get('sizeClass')) ? `is-info ${this.get('sizeClass')}` : 'is-info';
  }

  @computed('sizeClass', 'showError')
  get inputClasses() {
    let classes = ['input'];

    if (isPresent(this.get('sizeClass'))) {
      classes.push(this.get('sizeClass'));
    }

    if (this.get('showError')) {
      classes.push('is-danger');
    }

    return classes.join(' ');
  }

  @computed('size')
  get sizeClass() {
    return isPresent(this.get('size')) ? `is-${this.get('size')}` : '';
  }
}

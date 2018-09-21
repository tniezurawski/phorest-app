import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { and, notEmpty } from '@ember-decorators/object/computed';

@classNames('field')
export default class BulmaField extends Component {
  type = 'text';

  @notEmpty('error') hasError;
  @and('hasError', 'globalError') showError;
}

import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';

@classNames('field')
export default class BulmaField extends Component {
  type = 'text';
}

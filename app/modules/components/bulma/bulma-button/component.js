import Component from '@ember/component';
import { attribute, classNames, tagName } from '@ember-decorators/component';

@tagName('button')
@classNames('button')
export default class BulmaButton extends Component {
  isLoading = false;

  @attribute
  disabled = false;
}

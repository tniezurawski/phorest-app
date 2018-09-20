import Component from '@ember/component';
import { attribute, className, classNames, tagName } from '@ember-decorators/component';

@tagName('a')
@classNames('navbar-burger')
export default class AppNavbarBurger extends Component {
  @attribute
  role = 'button';

  @attribute('aria-label')
  ariaLabel = 'menu';

  @attribute('aria-expanded')
  @className('is-active')
  isActive = false;

  click() {
    this.toggle();
  }
}

import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class AppNavbar extends Component {
  isMobileMenuOpen = false;

  @action
  toggleMobileMenu() {
    this.toggleProperty('isMobileMenuOpen');
  }
}

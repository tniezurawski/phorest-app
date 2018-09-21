import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class HomeController extends Controller {
  @action
  searchForClient(email, phone) {
    return this.store.query('client', { email, phone });
  }
}

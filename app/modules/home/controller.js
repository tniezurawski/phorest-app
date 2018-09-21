import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { gt } from '@ember-decorators/object/computed';

export default class HomeController extends Controller {
  clients = [];

  @gt('clients.length', 0) showClients;

  @action
  searchForClient(email, phone) {
    return this.store.query('client', { email, phone })
      .then(clients => {
        this.set('clients', clients);
      });
  }
}

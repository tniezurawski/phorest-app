import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import { gt } from '@ember-decorators/object/computed';

export default class HomeController extends Controller {
  @service voucher;

  clients = [];
  hasSearched = false;

  @gt('clients.length', 0) showClients;

  @action
  async generateVoucher(client, originalBalance) {
    return await this.get('voucher').generate(client.get('id'), originalBalance);
  }

  @action
  async searchForClient(email, phone) {
    const clients = await this.store.query('client', { email, phone });
    this.setProperties({
      clients,
      hasSearched: true,
    });
  }
}

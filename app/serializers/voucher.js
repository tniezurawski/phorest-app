import ApplicationSerializer from './application';
import config from "../config/environment";

export default class VoucherSerializer extends ApplicationSerializer {
  primaryKey = 'voucherId';

  serialize() {
    let json = super.serialize(...arguments);

    // Add branchId from config
    json.creatingBranchId = config.auth.branchId;

    // Copy non empty attributes to root object
    Object.entries(json.data.attributes).forEach(([key, value]) => {
      if (value === null) {
        delete json.data.attributes[key];
      } else {
        json[key] = json.data.attributes[key];
      }
    });

    // Remove data object
    delete json.data;

    return json;
  }
}

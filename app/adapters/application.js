import HalAdapter from "ember-data-hal-9000/adapter";
import { computed } from '@ember-decorators/object';
import { dasherize } from '@ember/string';
import config from "../config/environment";

export default HalAdapter.extend({
  host: config.api.host,

  @computed
  get namespace() {
    return `${config.api.namespace}/business/${config.auth.businessId}`;
  },

  @computed
  get headers() {
    const credentials = btoa(`${config.auth.username}:${config.auth.password}`);

    return {
      'Accept': 'application/hal+json;charset=UTF-8',
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/hal+json',
    }
  },

  // no pluralize in API convention
  pathForType(modelName) {
    return dasherize(modelName);
  },
});

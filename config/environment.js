'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'phorest-app',
    podModulePrefix: 'phorest-app/modules',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // For this demo example I will use the same host and namespace in all environments
  ENV.api = {
    host: 'https://api-gateway-dev.phorest.com',
    namespace: 'third-party-api-server/api'
  };
  // I don't want to assume too much but all these variables would be probably get in a different way
  // Anyway, for this demo example I think it's ok to put it here
  ENV.auth = {
    businessId: 'eTC3QY5W3p_HmGHezKfxJw',
    branchId: 'SE-J0emUgQnya14mOGdQSw',
    password: 'VMlRo/eh+Xd8M~l',
    username: 'global/cloud@apiexamples.com',
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

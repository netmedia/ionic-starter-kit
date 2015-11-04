(function() {
  'use strict';

  /* ***************************************************************************
   * ### Project common configuration ###
   *
   * Used to store some global variables and configuration settings.
   */

  /*! */
  var configModule = angular.module('App.Config');

  configModule.constant('AppConfig', {
    // @if ENVIRONMENT == 'production'
    apiEndpoint: 'production-domain.com/api-endpoint'
    // @endif
    // @if ENVIRONMENT == 'development'
    apiEndpoint: 'development-domain.com/api-endpoint'
    // @endif
  });

  configModule.value("globals", {});

  module.exports = configModule;
})();
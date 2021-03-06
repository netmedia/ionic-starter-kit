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
    apiEndpoint: 'development-domain.com/api-endpoint'
  });

  configModule.value("globals", {});

  module.exports = configModule;
})();
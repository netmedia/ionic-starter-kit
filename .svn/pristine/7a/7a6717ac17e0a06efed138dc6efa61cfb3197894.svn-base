(function() {
  'use strict';

  /* ***************************************************************************
   * ### Helper module ###
   *
   * Contains the utility and helper functions used through whole application.
   */

  /*! */

  var helperModule = angular.module('App.Helpers');

  helperModule.service('Helpers', [
    '$rootScope',
    '$state',
    '$window',
    'AppConfig',
    'globals',
    Helpers
  ]);

  /*!
   * Constructor function for all kinds of helper methods used through whole project.
   *
   * @return {object} this
   */
  function Helpers($rootScope, $state, $window, AppConfig, globals) {

    var scope = {
      handleHttpResponse: _handleHttpResponse,
    };

    /*
     * ### *Public methods* ###
     */

    /*
     * Handles all kinds of http responses if it's not required to be hendled inside the controller.
     * Displays notification with a message received from the server. 
     *
     * @param   {object} response
     * @return  {object}
     */
    function _handleHttpResponse(response) {
      var message = '',
          type    = '';

      try {
        message = (response.status && response.status !== 200) ? response.statusText : response.data.message;
        type = response.data.success ? 'success' : 'error';
      } catch (exception) {
        type = 'error';
        message = 'Server error';
      }

      // if (message) {
      //   $rootScope.rootData.notification.show({
      //     title: type,
      //     message: message
      //   }, 'note-' + type);
      // }

      return response;
    };  
  }

  module.exports = helperModule;
})();
(function() {
  'use strict';

  /* ***************************************************************************
   * ### Common API module ###
   *
   * This is a project common api service. It's used for sending all api requests in the application.
   * It handles success and error response by default, if it's not set custom callback function explicitly.
   * Success and error responses are presented through the notifications on the top left corner of the screen.
   */

  /*! */

  var apiModule = angular.module('App.Api');

  apiModule.factory('Api', [
    '$q',
    '$http',
    'Helpers',
    apiService
  ]);

  function apiService($q, $http, Helpers) {

    var scope = {
      sendRequest: _sendRequest
    };

    /*
     * ### *Public methods* ###
     */

    /*
     * Sends API request to the server and handles default success and error response.
     * Common function for every API request in the application.
     * 
     * @param {object} params
     */
    function _sendRequest(params) {
      params.headers = {
        'X-Requested-With': 'XMLHttpRequest'
      };

      return $http(params)
      .then(function (response) {
        if (response) {
          var responseData = (response.data && typeof response.data.Data !== 'undefined') ? response.data.Data : response.data;
          return params.customCallback ? responseData : Helpers.handleHttpResponse(response);
        }
      })
      .catch(function (response) {
        $q.reject('HTTP status: ' + response.status);
        return params.customCallback ? response.data : Helpers.handleHttpResponse(response);
      });
    }

    /*! return scope */
    return scope;
  }

  module.exports = apiModule;
})();
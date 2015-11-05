(function() {
  'use strict';

  /* ***************************************************************************
   * ### Common API module ###
   *
   * This is a project common api service. It's used for sending all api requests in the application.
   * It handles success and error response by default, if it's not set custom callback function explicitly.
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
     * This implementation really depends of how you construct your backend logic but in general
     * you should have one place for API requests. Also, there's a 'Helpers' module with 'handleHttpResponse'
     * method, used to handle an API reaponse in case you don't specify a 'customCallback' function (inside the 
     * params object). This way you can reduce a code repetition if you need to handle an API call on the same way
     * in multiple places. 
     * 
     * @param   {object} params
     * @return  {object}
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

    return scope;
  }

  module.exports = apiModule;
})();
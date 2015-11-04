(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict';

  angular.module('App.Config', []);
  angular.module('App.Helpers', []);
  angular.module('App.Common', []);
  angular.module('App.Api', []);
  angular.module('App.Playlist', []);
  angular.module('templates', []);

  require('./common/config');
  require('./utility/helpers');
  require('./utility/api');
  require('./common/common');
  require('./playlist/playlist');
  require('./utility/templates');

  var appModule = angular.module('App', [

    // Ionic and angular modules
    'ionic',

    // Project modules
    'App.Config',
    'App.Helpers',
    'App.Common',
    'App.Api',
    'App.Playlist',
    'templates'
  ]);

  appModule.config([
    '$stateProvider',
    '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: 'common/templates/menu.html',
        controller: 'CommonCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'browse.html'
          }
        }
      })

      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent' :{
            templateUrl: 'playlist/templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'playlist/templates/playlistDetails.html',
            controller: 'PlaylistDetailsCtrl'
          }
        }
      });

      $urlRouterProvider.otherwise('/app/playlists');
    }
  ]);

  appModule.run([
    '$ionicPlatform',
    appMain
  ]);

  function appMain($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }

  module.exports = appModule;
})();
},{"./common/common":2,"./common/config":3,"./playlist/playlist":4,"./utility/api":6,"./utility/helpers":7,"./utility/templates":8}],2:[function(require,module,exports){
(function() {
  'use strict';

  angular.module('App.Common')
  .controller('CommonCtrl', [
    '$scope',
    '$ionicModal',
    '$timeout',
    '$state',
    'AppConfig',
    'Api',
    'Helpers',
    commonCtrl
  ]);

  function commonCtrl($scope, $ionicModal, $timeout, $state, AppConfig, Api, Helpers) {
    $scope.commonArray = [4, 5, 6];
    console.log('Common Controller');

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  }

  module.exports = angular.module('App.Common');
})();
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
(function() {
  'use strict';

  angular.module('App.Playlist')
  .controller('PlaylistCtrl', [
    '$scope',
    playlistCtrl
  ]);

  function playlistCtrl($scope) {
    console.debug('Playlist Controller: ', $scope.commonArray);

    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  }

  require('./playlistDetails');

  module.exports = angular.module('App.Playlist');
})();
},{"./playlistDetails":5}],5:[function(require,module,exports){
(function() {
  'use strict';

  angular.module('App.Playlist')
  .controller('PlaylistDetailsCtrl', [
    '$scope',
    playlistDetailsCtrl
  ]);

  function playlistDetailsCtrl($scope) {
    console.debug('Playlist Details Controller: ', $scope.commonArray);
  }

  module.exports = playlistDetailsCtrl;
})();
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("common/templates/menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\r\n  <ion-side-menu-content>\r\n    <ion-nav-bar class=\"bar-stable\">\r\n      <ion-nav-back-button>\r\n      </ion-nav-back-button>\r\n\r\n      <ion-nav-buttons side=\"left\">\r\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\r\n        </button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side=\"left\">\r\n    <ion-header-bar class=\"bar-stable\">\r\n      <h1 class=\"title\">Left</h1>\r\n    </ion-header-bar>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item menu-close ng-click=\"login()\">\r\n          Login\r\n        </ion-item>\r\n        <ion-item menu-close href=\"#/app/search\">\r\n          Search\r\n        </ion-item>\r\n        <ion-item menu-close href=\"#/app/browse\">\r\n          Browse\r\n        </ion-item>\r\n        <ion-item menu-close href=\"#/app/playlists\">\r\n          Playlists\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-side-menu>\r\n</ion-side-menus>");
$templateCache.put("playlist/templates/playlist.html","<ion-view view-title=\"Playlists\">\n  <ion-content>\n    <ion-list>\n      <ion-item ng-repeat=\"playlist in playlists\" href=\"#/app/playlists/{{playlist.id}}\">\n        {{playlist.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>");
$templateCache.put("playlist/templates/playlistDetails.html","<ion-view view-title=\"Playlist\">\n  <ion-content>\n    <h1>Playlist Details</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("browse.html","<ion-view view-title=\"Browse\">\n  <ion-content>\n    <h1>Browse</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("login.html","<ion-modal-view>\n  <ion-header-bar>\n    <h1 class=\"title\">Login</h1>\n    <div class=\"buttons\">\n      <button class=\"button button-clear\" ng-click=\"closeLogin()\">Close</button>\n    </div>\n  </ion-header-bar>\n  <ion-content>\n    <form ng-submit=\"doLogin()\">\n      <div class=\"list\">\n        <label class=\"item item-input\">\n          <span class=\"input-label\">Username</span>\n          <input type=\"text\" ng-model=\"loginData.username\">\n        </label>\n        <label class=\"item item-input\">\n          <span class=\"input-label\">Password</span>\n          <input type=\"password\" ng-model=\"loginData.password\">\n        </label>\n        <label class=\"item\">\n          <button class=\"button button-block button-positive\" type=\"submit\">Log in</button>\n        </label>\n      </div>\n    </form>\n  </ion-content>\n</ion-modal-view>\n");
$templateCache.put("search.html","<ion-view view-title=\"Search\">\n  <ion-content>\n    <h1>Search</h1>\n  </ion-content>\n</ion-view>\n");}]);
},{}]},{},[1]);

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
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
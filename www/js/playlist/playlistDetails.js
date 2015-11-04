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
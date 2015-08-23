'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.PhotoController
 * @description PhotoController
 * @requires ng.$scope
*/
angular
    .module('core')
    .controller('PhotoController', [
        '$scope', 'Camera',
        function($scope, Camera) {
          $scope.getPhoto = function() {
            console.log('Getting camera');
            Camera.getPicture({
              quality: 75,
              targetWidth: 320,
              targetHeight: 320,
              saveToPhotoAlbum: false
            }).then(function (imageURI) {
              console.log(imageURI);
              $scope.lastPhoto = imageURI;
            }, function (err) {
              console.err(err);
            });
          };

        }
]);

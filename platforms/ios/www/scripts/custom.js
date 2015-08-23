'use strict';
var ApplicationConfiguration = (function() {
    var applicationModuleName = 'angularjsapp';
    var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ui.utils'];
    var registerModule = function(moduleName) {
        angular
            .module(moduleName, []);
        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
angular
    .element(document)
    .ready(function() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '#!';
        }
        angular
            .bootstrap(document,
                [ApplicationConfiguration.applicationModuleName]);
    });

'use strict';

ApplicationConfiguration.registerModule('core');

'use strict';

angular
    .module('core')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

                        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
                });
        }
    ]);

'use strict';

angular
    .module('core')
    .controller('HomeController', [
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

'use strict';

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

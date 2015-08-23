'use strict';

describe('Controller: PhotoController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var PhotoController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PhotoController = $controller('PhotoController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});

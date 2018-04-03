'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngArchApp'));

  var MainCtrl,
    $rootScope, $s, $controller;

  // Initialize the controller and a mock scope
 
  beforeEach(inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $s = $rootScope.$new();
      $controller = $injector.get('$controller');
      MainCtrl = $controller('MainCtrl', {
        '$scope': $s
      });
    }));
alert($s);
  it('should attach a list of awesomeThings to the scope', function () {
     $s.user = {name: 'Niranjan', last: 'Verma'};
     expect($s.user).not.toBe(null);
  });
});

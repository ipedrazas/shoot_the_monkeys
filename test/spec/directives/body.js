'use strict';

describe('Directive: body', function () {

  // load the directive's module
  beforeEach(module('MonkeysApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<body></body>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the body directive');
  }));
});

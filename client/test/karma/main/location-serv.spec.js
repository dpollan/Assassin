'use strict';

describe('module: main, service: Location', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Location;
  beforeEach(inject(function (_Location_) {
    Location = _Location_;
  }));

  it('should do something', function () {
    expect(!!Location).toBe(true);
  });

});
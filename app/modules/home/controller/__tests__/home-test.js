import home from '../../index';
import 'angular-mocks';
describe('HomeController', () => {
  let controller;
  beforeEach(() => {
    angular.mock.module(home);
    angular.mock.inject(($controller, $location) => {
      controller = $controller('HomeController', { $location: $location });
    })
  });


  it('should initiate with correct home title and body', () => {
    assert.equal(controller.title, 'WebPack Angular ES6', 'HomeController has correct title');
    assert.equal(controller.description, 'This blog example is a quick exercise to illustrate how the Angular work with Webpack in ES6.', 'HomeController has correct description');
  });
});

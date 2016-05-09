import post from '../../index';
describe('PostController', () => {
  let controller;
  let service;
  beforeEach(() => {
    angular.mock.module(post);
    angular.mock.inject(($injector, $controller, $stateParams, $location) => {
      service = $injector.get('PostService');
      controller = $controller('PostController', {
        $stateParams: $stateParams,
        $location: $location,
        post: service,
        user: service,
        comments: service
      });
    })
  });


  it('should have correct author name', () => {
    assert.equal(controller.author, 'Yang Zhao', 'PostController has correct author name');
  });
});

/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('listUsers', {
      url: '/users',
      template: require('../view/users.html'),
      controller: 'UsersController',
      controllerAs: 'users',
      resolve: {
        users: (UserService) => {
          return UserService.getUsers().then((object) => {
            return object.data;
          });
        }
      }
    })
    .state('user', {
      url: '/users/:userId',
      template: require('../view/user.html'),
      controller: 'UserController',
      controllerAs: 'user',
      resolve: {
        user: (UserService, $stateParams) => {
          return UserService.getUser($stateParams.userId).then((object) => {
            return object.data;
          });
        },
        posts: (UserService, $stateParams) => {
          return UserService.getUserPosts($stateParams.userId).then((object) => {
            return object.data;
          });
        }
      }
    });
}

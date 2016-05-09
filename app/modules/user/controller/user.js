import '../sass/user.scss';
export default class UserController {
  constructor($stateParams, $location, user, posts) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.user = user;
    this.posts = posts;
  }
}

UserController.$inject = ['$stateParams', '$location', 'user', 'posts'];

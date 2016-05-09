import '../sass/users.scss';
export default class UserController {
  constructor($stateParams, $location, users) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.users = users;
  }
}

UserController.$inject = ['$stateParams', '$location', 'users'];

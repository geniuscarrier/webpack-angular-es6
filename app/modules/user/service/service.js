/*@ngInject*/
class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUsers() {
    return this.$http.get('http://jsonplaceholder.typicode.com/users');
  }

  getUser(usreId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/users/' + usreId);
  }

  getUserPosts(usreId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts/?userId=' + usreId);
  }
}

export default UserService;

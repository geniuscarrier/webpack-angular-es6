/*@ngInject*/
export default class PostService {
  constructor($http) {
    this.$http = $http;
  }

  getPosts() {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts');
  }

  getPost(postId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts/' + postId);
  }

  getUser(usreId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/users/' + usreId);
  }

  getComments(postId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
  }
}

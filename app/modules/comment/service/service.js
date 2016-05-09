/*@ngInject*/
class CommentService {
  constructor($http) {
    this.$http = $http;
  }

  getComments() {
    return this.$http.get('http://jsonplaceholder.typicode.com/comments');
  }

  getComment(commentId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/comments/' + commentId);
  }
}

export default CommentService;

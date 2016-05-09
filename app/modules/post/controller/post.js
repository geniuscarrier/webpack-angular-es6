import '../sass/post.scss';
export default class PostController {
  constructor($stateParams, $location, post, user, comments) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.post = post;
    this.user = user;
    this.comments = comments;
    this.author = 'Yang Zhao';
  }
}

PostController.$inject = ['$stateParams', '$location', 'post', 'user', 'comments'];

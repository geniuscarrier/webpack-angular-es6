import '../sass/posts.scss';
export default class PostControllers {
  constructor($stateParams, $location, posts) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.posts = posts;
  }
}

PostControllers.$inject = ['$stateParams', '$location', 'posts'];

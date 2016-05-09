import '../sass/comment.scss';
export default class CommentController {
  constructor($stateParams, $location, comment) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.comment = comment;
  }
}

CommentController.$inject = ['$stateParams', '$location', 'comment'];

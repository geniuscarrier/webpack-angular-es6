/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('listComments', {
      url: '/comments',
      template: require('../view/comments.html'),
      controller: 'CommentsController',
      controllerAs: 'comments',
      resolve: {
        comments: (CommentService) => {
          return CommentService.getComments().then((object) => {
            return object.data;
          });
        }
      }
    })
    .state('comment', {
      url: '/comments/:commentId',
      template: require('../view/comment.html'),
      controller: 'CommentController',
      controllerAs: 'comment',
      resolve: {
        comment: (CommentService, $stateParams) => {
          return CommentService.getComment($stateParams.commentId).then((object) => {
            return object.data;
          });
        }
      }
    });
}

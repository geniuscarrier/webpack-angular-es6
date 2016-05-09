import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import CommentService from './service/service';
import CommentsController from './controller/comments';
import CommentController from './controller/comment';

export default angular.module('comment', [uirouter])
  .config(routes)
  .service('CommentService', CommentService)
  .controller('CommentsController', CommentsController)
  .controller('CommentController', CommentController)
  .name;

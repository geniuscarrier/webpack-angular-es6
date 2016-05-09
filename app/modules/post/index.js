import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import Vote from './directive/vote';
import Social from './directive/social';
import PostService from './service/service';
import PostsController from './controller/posts';
import PostController from './controller/post';
import replay from './filter/reply';

export default angular.module('post', [uirouter])
  .config(routes)
  .service('PostService', PostService)
  .controller('PostsController', PostsController)
  .controller('PostController', PostController)
  .filter('reply', replay)
  .directive('vote', () => new Vote())
  .directive('social', () => new Social())
  .name;

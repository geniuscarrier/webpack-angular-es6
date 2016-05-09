import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import UserService from './service/service';
import UsersController from './controller/users';
import UserController from './controller/user';

export default angular.module('user', [uirouter])
  .config(routes)
  .service('UserService', UserService)
  .controller('UsersController', UsersController)
  .controller('UserController', UserController)
  .name;

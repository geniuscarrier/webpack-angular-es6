import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import Menu from './directive/menu';
import Footer from './directive/footer';
import HomeController from './controller/home';

export default angular.module('home', [uirouter])
  .config(routes)
  .controller('HomeController', HomeController)
  .directive('ngMenu', () => new Menu())
  .directive('ngFooter', () => new Footer())
  .name;

import HomeController from '../controller/home';
import '../sass/menu.scss';

/*@ngInject*/
export default class Menu {
  constructor() {
    this.template = require('../view/menu.html');
    this.restrict = 'E';
    this.scope = {};
    this.controller = HomeController;
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes, controller) {
    scope.isActive = function(viewLocation) {
      return viewLocation === controller.$location.path();
    };
  }
}

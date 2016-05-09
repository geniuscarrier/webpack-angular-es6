import '../sass/footer.scss';

/*@ngInject*/
export default class Footer {
  constructor() {
    this.template = require('../view/footer.html');
    this.restrict = 'E';
    this.scope = {};
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes) {
    scope.year = new Date().getFullYear();
    element.bind('click', (event) => {
      if (event.target && event.target.matches('a.backToTop')) {
        window.scrollTo(0, 0);
      }
    });
  }
}

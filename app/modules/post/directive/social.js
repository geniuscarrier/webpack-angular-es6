import toastr from 'toastr';
import '../sass/social.scss';

/*@ngInject*/
export default class Social {
  constructor() {
    this.template = '<div class="social">' +
      '<i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>' +
      '<i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>' +
      '<i class="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>' +
      '</div>';
    this.restrict = 'E';
    this.scope = {};
    this.transclude = true;
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes) {
    element.bind('click', (event) => {
      if (event.target && event.target.matches('i.fa-facebook-square')) {
        toastr.info('Thanks for sharing on Facebook');
      } else if (event.target && event.target.matches('i.fa-twitter-square')) {
        toastr.info('Thanks for sharing on Twitter');
      } else if (event.target && event.target.matches('i.fa-google-plus-square')) {
        toastr.info('Thanks for sharing on Google Plus');
      }
    });
  }

}

import toastr from 'toastr';
import '../sass/vote.scss';

/*@ngInject*/
export default class Vote {
  constructor() {
    this.template = '<div class="vote"><i class="fa fa-thumbs-up" aria-hidden="true"></i><span>|</span><i class="fa fa-thumbs-down" aria-hidden="true"></i></div>';
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
      if (event.target && event.target.matches('i.fa-thumbs-up')) {
        this.upVote();
      } else if (event.target && event.target.matches('i.fa-thumbs-down')) {
        this.downVote();
      }
    });
  }

  upVote() {
    toastr.success('You up voted!');
  }

  downVote() {
    toastr.error('You down voted!');
  }

}

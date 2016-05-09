import '../sass/home.scss';
export default class HomeController {
  constructor($location) {
    this.$location = $location;
    this.title = 'WebPack Angular ES6';
    this.description = 'This blog example is a quick exercise to illustrate how the Angular work with Webpack in ES6.';
  }
}

HomeController.$inject = ['$location'];

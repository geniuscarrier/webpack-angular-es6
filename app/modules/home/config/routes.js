/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../view/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}

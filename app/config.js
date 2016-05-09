/*@ngInject*/
export default ($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}

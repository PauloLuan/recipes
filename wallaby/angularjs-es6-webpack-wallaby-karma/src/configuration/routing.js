export function routingConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider.state('app', {
    url: '/',
    template: '<app></app>'
  })
}

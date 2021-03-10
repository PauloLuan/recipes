require('./App.scss')

export const App = {
  bindings: {},
  controller: function (AppService) {
    this.message = AppService.getMessage()
  },
  template: require('./App.html')
}

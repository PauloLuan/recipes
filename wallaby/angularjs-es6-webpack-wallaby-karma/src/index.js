require('angular-ui-router')
import angular from 'angular'
import { routingConfig } from './configuration/routing'

import { App } from 'components/app/App'
import { AppService } from 'shared/AppService'

angular
  .module('app', ['ui.router'])
  .config(routingConfig)
  .component('app', App)
  .factory('AppService', AppService)

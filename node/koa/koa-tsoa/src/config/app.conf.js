import kcors from 'kcors'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'

export default class ApplicationConfig {
  static init (app) {
    app.use(bodyParser())
    app.use(
      kcors({
        methods: ['POST', 'GET', 'PUT', 'DELETE']
      })
    )
    app.use(helmet())
  }
}

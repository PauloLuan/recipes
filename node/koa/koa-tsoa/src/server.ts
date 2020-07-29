import dotenv from 'dotenv-safe'
dotenv.config({
  path: `${__dirname}/config/.env`,
  sample: `${__dirname}/config/.env.example`,
  allowEmptyValues: true
})

import Koa from 'koa'
import ApplicationConfig from './config/app.conf'
import DBConfig from './config/db.conf'
import { initRoutes } from './config/routes.conf'

const app = new Koa()

DBConfig.init()
ApplicationConfig.init(app)

initRoutes(app)

const startServer = () => {
  app.listen(process.env.PORT, process.env.IP, () => {
    console.log(
      'Koa server listening on %s:%s in %s mode',
      process.env.IP,
      process.env.PORT,
      process.env.NODE_ENV
    )
  })
}

setImmediate(startServer)

module.exports = app

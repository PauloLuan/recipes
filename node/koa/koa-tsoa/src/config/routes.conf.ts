import Koa from 'koa'
import health from '../utils/health/routes'

import UserRoutes from '../user'

export const initRoutes = (app: Koa) => {
  app.use(health.routes())
  app.use(UserRoutes.routes())
}

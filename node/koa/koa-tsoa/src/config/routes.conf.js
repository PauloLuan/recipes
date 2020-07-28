import ServiceRoutes from '../'

export function initRoutes (app) {
  const startTime = new Date()

  // Insert routes below
  app.use('/api/user', ServiceRoutes)

  app.route('/health').get((req, res) => {
    const uptime = `${new Date() - startTime}ms`
    res.status(200).json({ startTime, uptime })
  })
}

import Router from 'koa-router'

const router = new Router({
  prefix: '/health'
})

const startTime = new Date()

router.get('/', async ctx => {
  const uptime = `${((new Date() as any) - <any>startTime)}ms`
  ctx.status = 200
  ctx.body = { startTime, uptime }
})

export default router

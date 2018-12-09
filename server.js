const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const n = next({ dev })
const handle = n.getRequestHandler()

n.prepare()
  .then(() => {
    const app = new Koa()
    const router = new Router()

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    app.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    app.use(router.routes())

    app.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

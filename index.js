const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const staticFiles = require('koa-static')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()

app.use(staticFiles(path.resolve(__dirname, './static')))

router.get('/', async (ctx, next) => {
  ctx.response.body = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})

router.get('/index.html', async (ctx, next) => {
  ctx.response.body = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})

router.get('/jobs.html', async (ctx, next) => {
  ctx.response.body = fs.readFileSync(path.resolve(__dirname, './jobs.html'), 'utf-8')
})

app.use(router.routes())

app.listen(process.env.PORT || 17000, () => {
  console.log(`server is running at http://127.0.0.1:${process.env.PORT || 17000}`)
})

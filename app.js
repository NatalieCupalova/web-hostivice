const log = console.log
const fs = require('fs')
const http = require('http')
const express = require('express')
const createHandler = require('github-webhook-handler')
var GithubWebHook = require('express-github-webhook');
const bodyParser = require('body-parser')

const key = fs.readFileSync('../nc-secret', 'utf8')
const handler = createHandler({ path: '/github-webhook', secret: key })
// const handler = GithubWebHook({ path: '/github-webhook', secret: 'nanycupy178' })

log(`KEYSTART${key.trim()}KEYEND`)

const app = express()
// const server = http.createServer((req, res) => {
//   handler(req, res, function (err) {
//     res.statusCode = 404
//     res.end('no such location')
//   })
//   app(req, res)
// })
const port = process.env.PORT || 3000

app.listen(port, () => log(`🍹 Express server is listening on port ${port}`))

// Configure basic routes

app.get('/', (req, res) => {
  res.send(
    `
    <h1>Hello World!</h1>
    <h2>Testing webhooks</h2>
    <br/>
    `
  )
})

// Configure Github Webhook

// app.use(bodyParser.json())
app.use(handler)

handler.on('push', (event) => {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})

handler.on('*', (event) => {
  console.log('Heyoa')
})
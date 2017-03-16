const log = console.log
const fs = require('fs')
const exec = require('child_process').exec
const http = require('http')
const express = require('express')
const createHandler = require('github-webhook-handler')

const key = fs.readFileSync('../nc-secret', 'utf8').trim()
const handler = createHandler({ path: '/github-webhook', secret: key })

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => log(`🍹 Express server is listening on port ${port}`))

// Configure basic routes

app.get('/', (req, res) => {
  res.redirect(301, 'ova')
})

app.use('/ova', express.static('web'))

// Configure Github Webhook

app.use(handler)

handler.on('push', (event) => {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)

  exec('git pull && npm i && pm2 reload web-hostivice', (error, stdout, stderr) => {
    log(stdout)
  })
})
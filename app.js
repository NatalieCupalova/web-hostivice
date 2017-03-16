const express = require('express')
const http = require('http')
const log = console.log

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => log(`🍹 Express server is listening on port ${port}`))

// Configure basic routes

app.get('/', (req, res) => {
  res.send(
    `
    <h1>Hello World!</h1>
    <br/>
    `
  )
})
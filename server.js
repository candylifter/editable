const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const host = 'localhost'

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'sandbox')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'sandbox/index.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  }

  console.log('==> 🌎 Listening on port %s. Open up http://%s:%s/ in your browser.', port, host, port)
})

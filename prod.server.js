var express = require('express')
var history = require('connect-history-api-fallback')


var port = process.env.PORT || 9001

var app = express()
app.use(history())
app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

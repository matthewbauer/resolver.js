import express from 'express'
import registry from './registry.json'

let app = express()

app.get('/:page', function (req, res) {
  if (req.params.page in registry) {
    res.redirect(registry[req.params.page])
  } else {
    res.redirect('/')
  }
})

app.get('/', function (req, res) {
  res.send('This is a server to resolve JavaScript interfaces.')
})

app.listen(process.env.PORT || 5000)

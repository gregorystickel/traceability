const express = require('express')
const cors = require('cors')
const port= process.env.PORT || 4000 
const app = express()
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'c7fc714883454dbda2aeedcad47cfebc',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.json())
app.use(cors())
app.use(express.static('client'))


const {getHTML, getCSS, getJS} = require('./controller')
app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)


app.listen(port, console.log(`Server running on ${port}`))
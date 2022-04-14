const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbConfig = require('./config/database.config')
const ready = require('readyness')

const app = express()
const port = process.env.SERVER_HOST_PORT || 3001
const corsOptions = {
  origin: `${process.env.APP_URL}:${process.env.CLIENT_HOST_PORT}` || 'http://localhost:3000'
}

app.disable('x-powered-by') // for security reasons though not fool-proof

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

const dbReady = ready.waitFor('database')

mongoose.Promise = global.Promise

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected to database')
    dbReady()
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now.')
    console.log(`DB connection string provided: ${dbConfig.url}`)
    console.log(err)
    process.exit(1)
  })

app.use(require('./app/routes'))
module.exports = app

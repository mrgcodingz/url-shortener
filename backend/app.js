const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const connection = require('./config/database.config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

const app = express()
const routes = require('./routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/api', routes)

app.listen(process.env.APP_PORT, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))
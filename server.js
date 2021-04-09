require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const behaviorsController = require('./controllers/behaviors')

const APP = express()
const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost:27017/' + 'behavior_buddy'


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
});

const whitelist = ['http://localhost:3000', 'https://secure-hollows-11303.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

APP.use(cors())

APP.use(express.json())

APP.use('/behaviors', behaviorsController)


APP.listen(PORT, () => {
  console.log('🎉🎊', 'behavioral support happening on port', PORT, '🎉🎊',)
})
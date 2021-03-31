const express = require('express')
const mongoose = require('mongoose')

const behaviorsController = require('./controllers/behaviors')

const APP = express()
const PORT = 3003
const DBNAME = 'behavior_buddy'

mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
});


APP.use(express.json())

APP.use('/behaviors', behaviorsController)


APP.listen(PORT, () => {
  console.log('🎉🎊', 'behavioral support happening on port', PORT, '🎉🎊',)
})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const behaviorsController = require('./controllers/behaviors')

const APP = express()
const PORT = 3003
const DBNAME = 'behavior_buddy'

mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
});

const whitelist = ['http://localhost:3000', 'http://localhost:3003']
// const corsOptions = {
//     origin: function (origin, callback) {
//         console.log(origin)
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

APP.use(cors())

APP.use(express.json())

APP.use('/behaviors', behaviorsController)


APP.listen(PORT, () => {
  console.log('🎉🎊', 'behavioral support happening on port', PORT, '🎉🎊',)
})
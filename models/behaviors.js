const mongoose = require('mongoose')

const behaviorSchema = mongoose.Schema({
    title: {type: String, required: true},
    definition: {type: String, required: true},
    methods: String,
    resources: {type: String, required: true},
})

behaviorSchema.index({ title: 'text' })

module.exports = mongoose.model('Behavior', behaviorSchema)

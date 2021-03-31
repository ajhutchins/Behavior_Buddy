const express = require('express')
const BEHAVIORS = express.Router()
const Behavior = require('../models/behaviors')



// SEED
BEHAVIORS.get('/seed', (req, res) => {
  Behavior.create([
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]'
      },
  ], (err, data) => {
      res.redirect('/behavior_buddy');
  })
});


// INDEX
// curl 'http://localhost:3003/behavior_buddy'
BEHAVIORS.get('/', (req, res) => {

  Behavior.find({}, (error, allBehaviors) => {
    if (err){
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(allBehaviors)
  })
})

module.exports = BEHAVIORS
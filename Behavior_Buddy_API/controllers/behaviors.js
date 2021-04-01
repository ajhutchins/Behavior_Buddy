const express = require('express');
const BEHAVIORS = express.Router();
const Behavior = require('../models/behaviors.js');

BEHAVIORS.get('/seed', (req, res) => {
  Behavior.create([
      {
          title: 'Applied Behavior Analysis (ABA)',
          definition: 'Scientific study of learning and behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]',
          key: 1
      },
      {
          title: 'Adjunctive Behavior',
          definition: 'Scientific study of behavior based upon emperical data.',
          methods: '',
          resources: '[Enter resources here]',
          key: 2
      },
      {
          title: 'Aversion Therapy',
          definition: 'Responding that reliably accompanies some other response that has been produced or occasioned by a stimulus, especially when the stimulus is presented according to a temporally defined schedule.',
          methods: '',
          resources: '[Enter resources here]',
          key: 3
      },
      {
          title: 'Aversive Stimulus',
          definition: 'An unpleasant event that is intended to decrease the probability of a behavior when it is presented as a consequence (i.e., punishment).',
          methods: '',
          resources: '[Enter resources here]',
          key: 4
      },
      {
          title: 'Backward Chaining',
          definition: 'Start by breaking the task down into small steps, then teach the last step first, working backward from the goal. Teacher will complete all of the steps except the last one and have the learner practice the final step',
          methods: '',
          resources: '[Enter resources here]',
          key: 5
      },
      {
          title: 'Baseline',
          definition: 'The level of a particular behavior before it was changed.',
          methods: '',
          resources: '[Enter resources here]',
          key: 6
      },
      {
          title: 'Behavioral Repertoire',
          definition: 'Behavior that a person has emitted in the past. It has been shaped, or, if it has been extinguished, it may be rapidly reconditioned.',
          methods: '',
          resources: '[Enter resources here]',
          key: 7
      },
      {
          title: 'Changing Criterion Design (CCD)',
          definition: 'Utilizes step-wise benchmarks for manipulating a dimension (i.e., accuracy, frequency, duration, latency, or magnitude) of a single behavior already present in an individual\'s repertoire',
          methods: '',
          resources: '[Enter resources here]',
          key: 8
      },
      {
          title: 'Classical Conditioning',
          definition: '(Aka: Classical (Pavolivan, respondent) conditioning - the most primitive and basic form of learning). When a stimulus the organism can identify is followed by a biologically significant event. Putting a signal before a reflex.',
          methods: '',
          resources: '[Enter resources here]',
          key: 9
      },
      {
          title: 'Compund Stimulus',
          definition: 'A stimulus comprising two or more simple stimuli that occur at the same time.',
          methods: '',
          resources: '[Enter resources here]',
          key: 10
      },
      {
          title: 'Concurrent Behavioral Contingency',
          definition: 'Are said to occur when more than one contingency of reinforcement or punishment is available at the same time..',
          methods: '',
          resources: '[Enter resources here]',
          key: 11
      },
      {
          title: 'Conditioned Response',
          definition: 'A reflex produced by a contingent relation between stimuli.',
          methods: '',
          resources: '[Enter resources here]',
          key: 12
      },
      {
          title: 'Conditioned Reinforcer(s)',
          definition: '(Also called a secondary reinforcer). It is something that needs to be learned through pairings with unconditioned reinforcers (for example, money is a learned reinforcer).',
          methods: '',
          resources: '[Enter resources here]',
          key: 13
      },
      {
          title: 'Contingency-Shaped Behavior',
          definition: 'Learned because of the reinforcement or punishment that the individual is exposed to by their actions. Their future actions are modified in a way based on that past experience of reinforcement and punishment.',
          methods: '',
          resources: '[Enter resources here]',
          key: 14
      },
      {
          title: 'Continuous Reinforcement',
          definition: 'When the desired behavior is reinforced every single time it occurs.',
          methods: '',
          resources: '[Enter resources here]',
          key: 15
      },
      {
          title: 'Dependent Variable',
          definition: 'The variable in an experiment measured to determine if it changes as a result of manipulations of the independent variable; in ABA, it represents some measure of a socially significant behavior.',
          methods: '',
          resources: '[Enter resources here]',
          key: 16
      },
      {
          title: 'Deprivation',
          definition: 'The absence or reduction of a reinforcer for a period of time. Deprivation is an establishing operation that increases the effectiveness of the reinforcer and the rate of behavior that produced that reinforcer in the past.',
          methods: '',
          resources: '[Enter resources here]',
          key: 17
      },
      {
          title: 'Discrete Trial Training (DTT)',
          definition: 'A structured ABA technique that breaks down skills into small, “discrete” components. Systematically, the trainer teaches these skills one by one. Along the way, trainers use tangible reinforcements for desired behavior.',
          methods: '',
          resources: '[Enter resources here]',
          key: 18
      },
        {
          title: 'Discrimination',
          definition: 'It involves the ability to distinguish between one stimulus and similar stimuli. In both cases, it means responding only to certain stimuli, and not responding to those that are similar.',
          methods: '',
          resources: '[Enter resources here]',
          key: 19
      },
      {
          title: 'Displacement',
          definition: 'Behavior that is observed in the natural environment and is characterized as irrelevant, incongruous, or out of context.',
          methods: '',
          resources: '[Enter resources here]',
          key: 20
      },
      {
          title: 'Echolalia',
          definition: 'Describes the precise repetition, or echoing, of words and sounds. It can be a symptom of various disorders including aphasia, dementia, traumatic brain injury, and schizophrenia, but it is most often associated with autism.',
          methods: '',
          resources: '[Enter resources here]',
          key: 21
      },
    ], (err, data) => {
      res.redirect('/behaviors');
  })
});


// INDEX
// curl 'http://localhost:3003/behavior_buddy'
BEHAVIORS.get('/', (req, res) => {

  Behavior.find({}, (err, allBehaviors) => {
    if (err){
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(allBehaviors)
  })
})

module.exports = BEHAVIORS
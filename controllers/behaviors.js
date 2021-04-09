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
      title: 'Compound Stimulus',
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
    {
      title: 'Errorless Discrimination Training',
      definition: 'A discrimination procedure in which the initial training involves only a brief, low intensity presentation of S-. Gradually, the intensity and duration of the S- is increased. Subjects rarely (if ever) respond to S-.',
      methods: '',
      resources: '[Enter resources here]',
      key: 22
    },
    {
      title: 'Establishing Operation',
      definition: 'Any change in the environment which alters the effectiveness of a stimulus to serve as a reinforcer and increases the probability of responses that have previously produced that stimulus - (i.e. food deprivation).',
      methods: '',
      resources: '[Enter resources here]',
      key: 23
    },
    {
      title: 'Extinction',
      definition: 'The reduction in frequency of an operant response which was previously rewarded that results when the response is no longer followed by the reinforcer.',
      methods: '',
      resources: '[Enter resources here]',
      key: 24
    },
    {
      title: 'Extinction Burst',
      definition: 'A rapid burst of target responses that occur which extinction is first applied.',
      methods: '',
      resources: '[Enter resources here]',
      key: 25
    },
    {
      title: 'Fading',
      definition: 'A procedure in which a stimulus is gradually increased or decreased in intensity. Can be used to transfer control from one stimulus to another.',
      methods: '',
      resources: '[Enter resources here]',
      key: 26
    },
    {
      title: 'Fluency Training',
      definition: 'The use of a changing criterion design to gradually increase the speed and accuracy of behavior (i.e. math fluency, foreign language fluency, etc.).',
      methods: '',
      resources: '[Enter resources here]',
      key: 27
    },
    {
      title: 'Forward Chaining',
      definition: 'A method used to train chained performances in which the first behavior in the chain is trained first; then each subsequent behavior is gradually introduced.',
      methods: '',
      resources: '[Enter resources here]',
      key: 28
    },
    {
      title: 'Generalized Reinforcer',
      definition: 'A specialized form of conditioned reinforcer which is backed up by a variety of primary reinforcers (i.e. money).',
      methods: '',
      resources: '[Enter resources here]',
      key: 29
    },
    {
      title: 'Habituation',
      definition: 'A decrease in responsiveness that comes as a result of repeated stimulation.',
      methods: '',
      resources: '[Enter resources here]',
      key: 30
    },
    {
      title: 'Hypothetical Constructs',
      definition: 'Nonobservable postulated events that are presumed to explain behavior but which become problematic because they are not directly observed, and are inferred from the behavior which they are purported to cause.',
      methods: '',
      resources: '[Enter resources here]',
      key: 31
    },
    {
      title: 'Independent Variable',
      definition: 'What is manipulated by the experimenter. In behavior analysis, the IV is typically the arrangement of events which precede or follow a response (establishing operations, stimulus control, and/or consequences).',
      methods: '',
      resources: '[Enter resources here]',
      key: 32
    },
    {
      title: 'Intermittent Reinforcement',
      definition: 'A reinforcement schedule in which responding is reinforced only some of the time.',
      methods: '',
      resources: '[Enter resources here]',
      key: 33
    },
    {
      title: 'Intrinsic Reinforcers',
      definition: 'Reinforcers that are the natural outcome of the target behavior. (i.e. social rewards of engaging in verbal behavior with others).',
      methods: '',
      resources: '[Enter resources here]',
      key: 34
    },
    {
      title: 'Learned Helplessness',
      definition: 'Interference with the learning of a new instrumental response as a result of inescapable and unavoidable aversive stimulation.',
      methods: '',
      resources: '[Enter resources here]',
      key: 35
    },
    {
      title: 'Learning',
      definition: 'An relatively enduring change in behavior that results from an interaction with the environment.',
      methods: '',
      resources: '[Enter resources here]',
      key: 36
    },
    {
      title: 'Negative Reinforcement',
      definition: 'A principle of behavior in which behavior increases as a result of the termination an aversive event or stimulus.',
      methods: '',
      resources: '[Enter resources here]',
      key: 37
    },
    {
      title: 'Observer Drift',
      definition: 'Gradual increases or decreases in an observer\'s likelihood to identify a given behavior; reduces DV accuracy.',
      methods: '',
      resources: '[Enter resources here]',
      key: 38
    },
    {
      title: 'Operant Conditioning',
      definition: 'A conditioning process in which an antecedent stimulus comes to occasion a target response as a result of pairing with a particular outcome or consequence.',
      methods: '',
      resources: '[Enter resources here]',
      key: 39
    },
    {
      title: 'Positive Reinforcement',
      definition: 'A principle of behavior in which behavior increases as a result of the presentation of an appetitive stimulus.',
      methods: '',
      resources: '[Enter resources here]',
      key: 40
    },
    {
      title: 'Private Behavior',
      definition: 'Behavior which is only accessible to the individual who emits it (i.e. thinking).',
      methods: '',
      resources: '[Enter resources here]',
      key: 41
    },
    {
      title: 'Prompting',
      definition: 'The explicit training of a supplemental stimulus (SD) that increases the probability of a response. Used to establish stimulus control. Usually it is faded out replaced by naturally occurring SDs.',
      methods: '',
      resources: '[Enter resources here]',
      key: 42
    },
    {
      title: 'Reinforcer',
      definition: 'A stimulus (or event) whose availability shortly following the target response increases the future likelihood of that response.',
      methods: '',
      resources: '[Enter resources here]',
      key: 43
    },
    {
      title: 'Response Blocking',
      definition: 'Physically intervening to prevent the completion of the response as soon as the person begins to emit the problem behavior.',
      methods: '',
      resources: '[Enter resources here]',
      key: 44
    },
    {
      title: 'Response Chain',
      definition: 'A consecutively ordered series of responses in which each response produces a cue for the next response in the sequence.',
      methods: '',
      resources: '[Enter resources here]',
      key: 45
    },
    {
      title: 'Response Class',
      definition: 'A class of related behaviors that functionally produce the same consequences. (e.g. "please open the door" and opening the door both produce an open door).',
      methods: '',
      resources: '[Enter resources here]',
      key: 46
    },
    {
      title: 'Response Cost',
      definition: 'A principle of behavior in which behavior decreases as a result of the removal of an actual appetitive stimulus (e.g. parking or traffic fines).',
      methods: '',
      resources: '[Enter resources here]',
      key: 47
    },
    {
      title: 'Response Latency',
      definition: 'The time elapsed between the presentation of a stimulus and the subject\'s response. This is often used as a dependent variable.',
      methods: '',
      resources: '[Enter resources here]',
      key: 48
    },
    {
      title: 'Satiation',
      definition: 'Repeated presentation of a stimulus can reduce its efficacy as a reinforcer - can be used as a treatment strategy.',
      methods: '',
      resources: '[Enter resources here]',
      key: 49
    },
    {
      title: 'SD',
      definition: 'A discriminative stimulus that evokes instrumental behavior because it signals the availability of reinforcement for a target response.',
      methods: '',
      resources: '[Enter resources here]',
      key: 50
    },
    {
      title: 'Self-Injurious Behavior',
      definition: 'Behaviors that are harmful to oneself, such as head-banging, scratching or biting oneself.',
      methods: '',
      resources: '[Enter resources here]',
      key: 51
    },
    {
      title: 'Self-Stimulation',
      definition: 'Repetative behaviors that interfere with the individual\'s ability to pay attention or participate in meaningful activity, spinning objects.',
      methods: '',
      resources: '[Enter resources here]',
      key: 52
    },
    {
      title: 'Shaping',
      definition: 'Reinforcing successive approximations to the required (target) response.',
      methods: '',
      resources: '[Enter resources here]',
      key: 53
    },
    {
      title: 'Social Validity',
      definition: 'The goals, procedures and results of an intervention are acceptable to the client, the behavior analyst and to society.',
      methods: '',
      resources: '[Enter resources here]',
      key: 54
    },
    {
      title: 'Stimulus Control',
      definition: 'The ability of a particular stimulus to elicit or occasion a target response.',
      methods: '',
      resources: '[Enter resources here]',
      key: 55
    },
    {
      title: 'Stimulus Generalization',
      definition: 'The occurrence of a behavior, learned in the presence of one stimulus, that is emitted in response to other stimilar (novel) stimuli.',
      methods: '',
      resources: '[Enter resources here]',
      key: 56
    },
    {
      title: 'Task Analysis',
      definition: 'The process of breaking a skill down into smaller steps to be taught individually.',
      methods: '',
      resources: '[Enter resources here]',
      key: 57
    },
    {
      title: 'Time-Out',
      definition: 'Removal of the opportunity to earn or obtain positive reinforcement.',
      methods: '',
      resources: '[Enter resources here]',
      key: 58
    },
    {
      title: 'Token Economy',
      definition: 'A reinforcement system in which tokens are delivered contingent upon specified target behaviors. Tokens can be exchanged for goods, services, privileges and/or other backup reinforcers. Effective in classrooms, nursing homes, in-patient facilities, etc..',
      methods: '',
      resources: '[Enter resources here]',
      key: 59
    },
    {
      title: 'Total Task Chaining',
      definition: 'A variation of forward chaining in which the learner receives training on each behavior in the chain during session.',
      methods: '',
      resources: '[Enter resources here]',
      key: 60
    },
    {
      title: 'Unconditioned Stimulus',
      definition: 'The stimulus component of an unconditioned reflex; a stimulus change that elicits respondent behavior without any prior learning.',
      methods: '',
      resources: '[Enter resources here]',
      key: 61
    },
    {
      title: 'Variable Interval',
      definition: 'A schedule of reinforcement that provides reinforcement for the first correct response folling the elase of variable durations of time occuring in a random or unpredictable order. The mean duration of teh intervals is used to describe the schedule.',
      methods: '',
      resources: '[Enter resources here]',
      key: 62
    },
    {
      title: 'Whole-Interval Recording',
      definition: 'A time sampling method for mesuring behavior in which the observation period is divided into a series of brief time intervals. At the end of each interval, the observer records whether the target behavior occurred throughout the entire interval; tends to underesteimate the proportion of the observation period that many behaviors acutally occurred.',
      methods: '',
      resources: '[Enter resources here]',
      key: 63
    },
  ], (err, data) => {
    res.redirect('/behaviors');
  })
});


// INDEX
// curl 'http://localhost:3003/behavior_buddy'
BEHAVIORS.get('/', (req, res) => {

  Behavior.find({}, (err, allBehaviors) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(allBehaviors)
  })
})

// curl 'http://localhost:3003/behavior_buddy'
BEHAVIORS.get('/find/:query', (req, res) => {
  var query = req.params.query;
  console.log(query)
  // console.log(Behavior.find({'title': 'Classical'}))
  Behavior.find({
    $text: {
      $search: query
    }
  }, function (err, result) {
    console.log(result)
    if (err) throw err;
    if (result) {
      console.log(result)
      res.json(result)
    } else {
      res.send(JSON.stringify({
        error: 'Error'
      }))
    }
  })
})


// app.get('/pokedex/:indexOfPokemon', (req, res) => {
//   res.render('show.ejs', {
//       data: Pokemon[req.params.indexOfPokemon]
//   });
// });


module.exports = BEHAVIORS
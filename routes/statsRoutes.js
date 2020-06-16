const Workout = require('../models/Workout.js')

//define express router
const router = require('express').Router()
//GET all exercises
router.get('/workouts/range', (req, res) => {
  Workout.find({})
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})
//export routes
module.exports = router
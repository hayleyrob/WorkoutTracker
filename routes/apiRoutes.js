const Workout = require('../models/Workout.js')

//define express router
const router = require('express').Router()
//GET all exercises
router.get('/workouts', (req, res) => {
  Workout.find(req.params.id)
    .then((workout) => res.json(workout))
    .catch(err => console.error(err))
})
// //GET one exercise
// router.get('/workouts/:id', (req, res) => {
//     Workout.findById(req.params.id)
//         .then((workout) => res.json(workout))
//         .catch(err => console.error(err))
// })
//PUT one exercise
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((db) => res.json(db))
    .catch(err => console.error(err))
})
//POST one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})
//export routes
module.exports = router
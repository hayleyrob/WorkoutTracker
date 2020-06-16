//bring in mongoose Schema and model 
const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')
//define what exercise will look like for new data
const workoutSchema = new Schema(
  {
    // define first index
    day: {
      type: Date,
      default: () => new Date()
    },
    // define secondary index
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }]
  },
  {
    duration: true,
    weight: true,
    distance: true,
    toJSON: {
      //enable virtual properties 
      virtuals: true
    }
  }
)

//define virtual properties for totaling duration
workoutSchema.virtual("totalDuration").get(function () {
  //reduce array allows sum of duration
  return this.exercises.reduce((duration, exercises) => {
    return duration + exercises.duration;
  }, 0)
})
//define virtual properties for totaling weight
workoutSchema.virtual("totalWeight").get(function () {
  //reduce array allows sum of exercise
  return this.exercises.reduce((weight, exercises) => {
    return weight + exercises.weight;
  }, 0)
})
//define virtual properties for totaling distance
workoutSchema.virtual("totalDistance").get(function () {
  //reduce array allows sum of exercise
  return this.exercises.reduce((distance, exercises) => {
    return distance + exercises.distance;
  }, 0)
})

//  const Workout = mongoose.model('Workout', workoutSchema)

module.exports = model('Workout', workoutSchema)

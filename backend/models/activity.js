// models/activity.js
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  duration: Number,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
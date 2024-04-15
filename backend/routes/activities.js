// routes/activities.js
const express = require('express');
const router = express.Router();
const Activity = require('../models/activity');

router.get('/', async (req, res) => {
  const activities = await Activity.find();
  res.send(activities);
});

router.post('/', async (req, res) => {
  const newActivity = new Activity(req.body);
  const savedActivity = await newActivity.save();
  res.send(savedActivity);
});

router.delete('/:id', async (req, res) => {
  const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
  res.send(deletedActivity);
});

module.exports = router;
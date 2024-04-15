// server.js
const express = require('express');
const mongoose = require('mongoose');
const activitiesRouter = require('./routes/activities');
const app = express();

mongoose.connect('mongodb://localhost/fitnessdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/activities', activitiesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
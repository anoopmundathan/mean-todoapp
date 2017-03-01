'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todoapp', function(err) {
  if (err) {
    console.log('Error in connecting MongoDB');
  } else {
    console.log('Succesfully connected to MongoDB');
  }
});

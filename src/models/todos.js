'use strict';

var mongoose = require('mongoose');

var todoSchama = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Todo', todoSchama);

module.exports = model;

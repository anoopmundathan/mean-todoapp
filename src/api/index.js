'use strict';

var express = require('express');
var Todo = require('../models/todos');

var router = express.Router();

router.route('/todos')
  .get(function(req, res, next){
    Todo.find({})
      .exec(function(err, todos) {
        if (!err && todos.length) {
          res.json(todos);
        }
      })
  })
  .post(function(req, res) {
    Todo.create(req.body, function(err, todo) {
      if (err) {
       return res.status(500).send({ err: err });
      }
      res.send({ 'todo': todo, message: 'Created'});
    });
  });

router.route('/todos/:id')
  .put(function(req, res) {
    var id = req.params.id;
    var todo = req.body;
    if (todo && todo._id !== id) {
      return res.status(500).send({err: "Ids do not match"});
    }
    Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
      if (err) {
        return res.status(500).send({err: err})
      }
      res.send({'todo': todo, 'message': 'Updated'});
    });
  })
  .delete(function(req, res) {
  });

module.exports = router;

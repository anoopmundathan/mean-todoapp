'use strict';

var express = require('express');

var router = express.Router();

// GET /api/todos
router.get('/todos', function(req, res) {
  res.send('GET TODOS');
});

// POST /api/todos
router.post('/todos', function(req, res) {
    res.send('POST TODOS');
});

// PUT /api/todos/:id
router.put('/todos/:id', function(req, res) {
  res.send('PUT TODOS');
});

// DELETE /api/todos/:id
router.delete('/todos/:id', function(req, res) {
  res.send('DELETE TODOS');
});

module.exports = router;
